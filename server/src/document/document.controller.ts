import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentService } from "./document.service";
import { DocumentControllerBase } from "./base/document.controller.base";
import { Response } from "express";
import { Public } from "src/decorators/public.decorator";
import * as iconv from "iconv-lite"; // Import the iconv-lite library
import archiver from "archiver";

@swagger.ApiTags("documents")
@common.Controller("documents")
export class DocumentController extends DocumentControllerBase {
  constructor(
    protected readonly service: DocumentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
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
  async downloadTxt(@common.Res() res: Response) {
    try {
      console.log("Download endpoint hit"); // Debugging line

      const documentID = "clmdq18c80000vgwcxavenurh"; // Replace this with the actual Document ID
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
}
// {"line":"clm4yh2z10002vg50wsd5ucdw"}
