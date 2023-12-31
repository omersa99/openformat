import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ReceiptDetailController } from "../receiptDetail.controller";
import { ReceiptDetailService } from "../receiptDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accountNumber: "exampleAccountNumber",
  bankNumber: 42,
  branchIdentifier: "exampleBranchIdentifier",
  branchNumber: 42,
  checkNumber: 42,
  createdAt: new Date(),
  creditTransactionType: 42,
  id: "exampleId",
  payeeCompanyCode: "examplePayeeCompanyCode",
  paymentCheckClearanceDate: new Date(),
  paymentType: 42,
  swipedCardName: "exampleSwipedCardName",
  total: 42.424242424,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accountNumber: "exampleAccountNumber",
  bankNumber: 42,
  branchIdentifier: "exampleBranchIdentifier",
  branchNumber: 42,
  checkNumber: 42,
  createdAt: new Date(),
  creditTransactionType: 42,
  id: "exampleId",
  payeeCompanyCode: "examplePayeeCompanyCode",
  paymentCheckClearanceDate: new Date(),
  paymentType: 42,
  swipedCardName: "exampleSwipedCardName",
  total: 42.424242424,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accountNumber: "exampleAccountNumber",
    bankNumber: 42,
    branchIdentifier: "exampleBranchIdentifier",
    branchNumber: 42,
    checkNumber: 42,
    createdAt: new Date(),
    creditTransactionType: 42,
    id: "exampleId",
    payeeCompanyCode: "examplePayeeCompanyCode",
    paymentCheckClearanceDate: new Date(),
    paymentType: 42,
    swipedCardName: "exampleSwipedCardName",
    total: 42.424242424,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accountNumber: "exampleAccountNumber",
  bankNumber: 42,
  branchIdentifier: "exampleBranchIdentifier",
  branchNumber: 42,
  checkNumber: 42,
  createdAt: new Date(),
  creditTransactionType: 42,
  id: "exampleId",
  payeeCompanyCode: "examplePayeeCompanyCode",
  paymentCheckClearanceDate: new Date(),
  paymentType: 42,
  swipedCardName: "exampleSwipedCardName",
  total: 42.424242424,
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ReceiptDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReceiptDetailService,
          useValue: service,
        },
      ],
      controllers: [ReceiptDetailController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /receiptDetails", async () => {
    await request(app.getHttpServer())
      .post("/receiptDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paymentCheckClearanceDate:
          CREATE_RESULT.paymentCheckClearanceDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /receiptDetails", async () => {
    await request(app.getHttpServer())
      .get("/receiptDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          paymentCheckClearanceDate:
            FIND_MANY_RESULT[0].paymentCheckClearanceDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /receiptDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/receiptDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /receiptDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/receiptDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        paymentCheckClearanceDate:
          FIND_ONE_RESULT.paymentCheckClearanceDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /receiptDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/receiptDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paymentCheckClearanceDate:
          CREATE_RESULT.paymentCheckClearanceDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/receiptDetails")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
