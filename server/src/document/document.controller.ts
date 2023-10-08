import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentService } from "./document.service";
import { DocumentControllerBase } from "./base/document.controller.base";
import { Response } from "express";
import { Public } from "src/decorators/public.decorator";
import * as iconv from "iconv-lite"; // Import the iconv-lite library
import archiver from "archiver";
import { PrismaService } from "src/prisma/prisma.service";
import { getNextDocumentNumber } from "./documentNumGenerate";

@swagger.ApiTags("documents")
@common.Controller("documents")
export class DocumentController extends DocumentControllerBase {
  constructor(
    protected readonly service: DocumentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    private readonly prismaService: PrismaService // Inject the Prisma service
  ) {
    super(service, rolesBuilder);
  }

  @swagger.ApiBody({ type: String })
  @common.Post("code2Idocument")
  line2account(@common.Body() data: { line: string }) {
    const { line } = data;
    return this.service.Line2Document(line); // Note the change here
  }

  @swagger.ApiBody({ type: String })
  @common.Post("document2Json")
  convertDocument2String(@common.Body() data: { line: string }) {
    const { line } = data;
    return this.service.convertDocument2String(line); // Note the change here
  }

  @Public()
  @common.Get("downloadTxt")
  async downloadTxt(@common.Res() res: Response, @common.Query("id") id: string) {
    try {
      console.log("Download endpoint hit"); // Debugging line

      const documentID = id || "clmdq18c80000vgwcxavenurh"; // Use the id from query or a default one
      const result = (await this.service.convertDocument2String(documentID)) || "";

      const archive = archiver("zip");

      // Set up the zip file headers
      res.setHeader("Content-Disposition", "attachment; filename=files.zip");
      res.setHeader("Content-Type", "application/zip");

      archive.pipe(res);

      // Add the first file
      const formattedStringBuffer = iconv.encode(result.formattedString, "ISO-8859-8");
      archive.append(formattedStringBuffer, { name: "BKMVDATA.txt" });

      // Add the second file
      const INIdataBuffer = iconv.encode(result.INIdata, "ISO-8859-8");
      archive.append(INIdataBuffer, { name: "INI.txt" });

      // Finalize the zip
      archive.finalize();
    } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).send("An error occurred");
    }
  }

  // Create a new GET endpoint for getNextDocumentNumber
  @common.Get("getNextDocumentNumber")
  async getNextDocumentNumberEndpoint(@common.Query("businessId") businessId: string, @common.Query("documentType") documentType: number) {
    try {
      // Call the getNextDocumentNumber function
      const nextDocumentNumber = await getNextDocumentNumber(this.prismaService, businessId, documentType);

      if (nextDocumentNumber !== null) {
        return { documentNumber: nextDocumentNumber };
      } else {
        // Handle the case where businessSetting is not found
        return { error: "Business setting not found." };
      }
    } catch (error) {
      console.error("An error occurred:", error);
      throw new common.InternalServerErrorException("An error occurred");
    }
  }
}
// {"line":"clm4yh2z10002vg50wsd5ucdw"}
