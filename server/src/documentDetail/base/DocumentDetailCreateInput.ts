/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsInt,
  IsString,
} from "class-validator";
import { Decimal } from "decimal.js";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";
import { Type } from "class-transformer";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";
import { TransactionCreateNestedManyWithoutDocumentDetailsInput } from "./TransactionCreateNestedManyWithoutDocumentDetailsInput";

@InputType()
class DocumentDetailCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  discountAmount?: Decimal | null;

  @ApiProperty({
    required: true,
    type: () => DocumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentWhereUniqueInput)
  @Field(() => DocumentWhereUniqueInput)
  document!: DocumentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemWhereUniqueInput)
  @IsOptional()
  @Field(() => ItemWhereUniqueInput, {
    nullable: true,
  })
  item?: ItemWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  priceWithoutVat?: Decimal | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutDocumentDetailsInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutDocumentDetailsInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutDocumentDetailsInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutDocumentDetailsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionType?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  vatRate?: number | null;
}

export { DocumentDetailCreateInput as DocumentDetailCreateInput };
