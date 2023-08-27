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
import { TransactionController } from "../transaction.controller";
import { TransactionService } from "../transaction.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accountInTransaction: "exampleAccountInTransaction",
  actionAmount: 42,
  actionIndicator: 42,
  actionOperation: "exampleActionOperation",
  counterAccount: "exampleCounterAccount",
  createdAt: new Date(),
  date: new Date(),
  details: "exampleDetails",
  entryDate: new Date(),
  foreignCurrencyAmount: 42,
  foreignCurrencyCode: "exampleForeignCurrencyCode",
  id: "exampleId",
  lineNumberInTransaction: 42,
  matchingField_1: "exampleMatchingField_1",
  matchingField_2: "exampleMatchingField_2",
  modifiedDate: new Date(),
  portion: 42,
  reference: "exampleReference",
  reference_2: "exampleReference_2",
  referenceDocumentType: 42,
  referenceDocumentType_2: 42,
  transactionNumber: 42,
  transactionType: "exampleTransactionType",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accountInTransaction: "exampleAccountInTransaction",
  actionAmount: 42,
  actionIndicator: 42,
  actionOperation: "exampleActionOperation",
  counterAccount: "exampleCounterAccount",
  createdAt: new Date(),
  date: new Date(),
  details: "exampleDetails",
  entryDate: new Date(),
  foreignCurrencyAmount: 42,
  foreignCurrencyCode: "exampleForeignCurrencyCode",
  id: "exampleId",
  lineNumberInTransaction: 42,
  matchingField_1: "exampleMatchingField_1",
  matchingField_2: "exampleMatchingField_2",
  modifiedDate: new Date(),
  portion: 42,
  reference: "exampleReference",
  reference_2: "exampleReference_2",
  referenceDocumentType: 42,
  referenceDocumentType_2: 42,
  transactionNumber: 42,
  transactionType: "exampleTransactionType",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accountInTransaction: "exampleAccountInTransaction",
    actionAmount: 42,
    actionIndicator: 42,
    actionOperation: "exampleActionOperation",
    counterAccount: "exampleCounterAccount",
    createdAt: new Date(),
    date: new Date(),
    details: "exampleDetails",
    entryDate: new Date(),
    foreignCurrencyAmount: 42,
    foreignCurrencyCode: "exampleForeignCurrencyCode",
    id: "exampleId",
    lineNumberInTransaction: 42,
    matchingField_1: "exampleMatchingField_1",
    matchingField_2: "exampleMatchingField_2",
    modifiedDate: new Date(),
    portion: 42,
    reference: "exampleReference",
    reference_2: "exampleReference_2",
    referenceDocumentType: 42,
    referenceDocumentType_2: 42,
    transactionNumber: 42,
    transactionType: "exampleTransactionType",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accountInTransaction: "exampleAccountInTransaction",
  actionAmount: 42,
  actionIndicator: 42,
  actionOperation: "exampleActionOperation",
  counterAccount: "exampleCounterAccount",
  createdAt: new Date(),
  date: new Date(),
  details: "exampleDetails",
  entryDate: new Date(),
  foreignCurrencyAmount: 42,
  foreignCurrencyCode: "exampleForeignCurrencyCode",
  id: "exampleId",
  lineNumberInTransaction: 42,
  matchingField_1: "exampleMatchingField_1",
  matchingField_2: "exampleMatchingField_2",
  modifiedDate: new Date(),
  portion: 42,
  reference: "exampleReference",
  reference_2: "exampleReference_2",
  referenceDocumentType: 42,
  referenceDocumentType_2: 42,
  transactionNumber: 42,
  transactionType: "exampleTransactionType",
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

describe("Transaction", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TransactionService,
          useValue: service,
        },
      ],
      controllers: [TransactionController],
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

  test("POST /transactions", async () => {
    await request(app.getHttpServer())
      .post("/transactions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        entryDate: CREATE_RESULT.entryDate.toISOString(),
        modifiedDate: CREATE_RESULT.modifiedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /transactions", async () => {
    await request(app.getHttpServer())
      .get("/transactions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          entryDate: FIND_MANY_RESULT[0].entryDate.toISOString(),
          modifiedDate: FIND_MANY_RESULT[0].modifiedDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /transactions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/transactions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /transactions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/transactions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        entryDate: FIND_ONE_RESULT.entryDate.toISOString(),
        modifiedDate: FIND_ONE_RESULT.modifiedDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /transactions existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/transactions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        entryDate: CREATE_RESULT.entryDate.toISOString(),
        modifiedDate: CREATE_RESULT.modifiedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/transactions")
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
