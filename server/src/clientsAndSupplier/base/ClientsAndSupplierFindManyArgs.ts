/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClientsAndSupplierWhereInput } from "./ClientsAndSupplierWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClientsAndSupplierOrderByInput } from "./ClientsAndSupplierOrderByInput";

@ArgsType()
class ClientsAndSupplierFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClientsAndSupplierWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClientsAndSupplierWhereInput, { nullable: true })
  @Type(() => ClientsAndSupplierWhereInput)
  where?: ClientsAndSupplierWhereInput;

  @ApiProperty({
    required: false,
    type: [ClientsAndSupplierOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClientsAndSupplierOrderByInput], { nullable: true })
  @Type(() => ClientsAndSupplierOrderByInput)
  orderBy?: Array<ClientsAndSupplierOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClientsAndSupplierFindManyArgs as ClientsAndSupplierFindManyArgs };
