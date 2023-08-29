import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { BusinessModule } from "./business/business.module";
import { AccountModule } from "./account/account.module";
import { TransactionModule } from "./transaction/transaction.module";
import { DocumentModule } from "./document/document.module";
import { ItemModule } from "./item/item.module";
import { BankbookModule } from "./bankbook/bankbook.module";
import { ClientsAndSupplierModule } from "./clientsAndSupplier/clientsAndSupplier.module";
import { ItemTransactionModule } from "./itemTransaction/itemTransaction.module";
import { DocumentDetailModule } from "./documentDetail/documentDetail.module";
import { ReceiptDetailModule } from "./receiptDetail/receiptDetail.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    BusinessModule,
    AccountModule,
    TransactionModule,
    DocumentModule,
    ItemModule,
    BankbookModule,
    ClientsAndSupplierModule,
    ItemTransactionModule,
    DocumentDetailModule,
    ReceiptDetailModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
