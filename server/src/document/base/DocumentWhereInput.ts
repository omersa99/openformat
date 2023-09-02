/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BusinessWhereUniqueInput } from "../../business/base/BusinessWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ClientsAndSupplierWhereUniqueInput } from "../../clientsAndSupplier/base/ClientsAndSupplierWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DocumentDetailListRelationFilter } from "../../documentDetail/base/DocumentDetailListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReceiptDetailListRelationFilter } from "../../receiptDetail/base/ReceiptDetailListRelationFilter";

@InputType()
class DocumentWhereInput {
  @ApiProperty({
    required: false,
    type: () => BusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BusinessWhereUniqueInput)
  @IsOptional()
  @Field(() => BusinessWhereUniqueInput, {
    nullable: true,
  })
  business?: BusinessWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  canceledDocument?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ClientsAndSupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientsAndSupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientsAndSupplierWhereUniqueInput, {
    nullable: true,
  })
  clientSupplier?: ClientsAndSupplierWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  documentDate?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DocumentDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DocumentDetailListRelationFilter)
  @IsOptional()
  @Field(() => DocumentDetailListRelationFilter, {
    nullable: true,
  })
  documentDetails?: DocumentDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  documentNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  documentProductionDate?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  documentType?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  linkedDocumentIds?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ReceiptDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReceiptDetailListRelationFilter)
  @IsOptional()
  @Field(() => ReceiptDetailListRelationFilter, {
    nullable: true,
  })
  receiptDetails?: ReceiptDetailListRelationFilter;
}

export { DocumentWhereInput as DocumentWhereInput };
