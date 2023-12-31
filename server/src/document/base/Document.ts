/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Business } from "../../business/base/Business";
import {
  ValidateNested,
  IsBoolean,
  IsOptional,
  IsDate,
  IsNumber,
  IsInt,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { ClientsAndSupplier } from "../../clientsAndSupplier/base/ClientsAndSupplier";
import { Decimal } from "decimal.js";
import { DocumentDetail } from "../../documentDetail/base/DocumentDetail";
import { ReceiptDetail } from "../../receiptDetail/base/ReceiptDetail";

@ObjectType()
class Document {
  @ApiProperty({
    required: true,
    type: () => Business,
  })
  @ValidateNested()
  @Type(() => Business)
  business?: Business;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  canceledDocument!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ClientsAndSupplier,
  })
  @ValidateNested()
  @Type(() => ClientsAndSupplier)
  @IsOptional()
  clientSupplier?: ClientsAndSupplier | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  deductionAmount!: Decimal | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  documentDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [DocumentDetail],
  })
  @ValidateNested()
  @Type(() => DocumentDetail)
  @IsOptional()
  documentDetails?: Array<DocumentDetail>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  documentNumber!: number | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  documentType!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  linkedDocumentIds!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  modifiedDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [ReceiptDetail],
  })
  @ValidateNested()
  @Type(() => ReceiptDetail)
  @IsOptional()
  receiptDetails?: Array<ReceiptDetail>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Document as Document };
