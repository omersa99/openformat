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
import { AccountCreateNestedManyWithoutBusinessesInput } from "./AccountCreateNestedManyWithoutBusinessesInput";
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClientsAndSupplierCreateNestedManyWithoutBusinessesInput } from "./ClientsAndSupplierCreateNestedManyWithoutBusinessesInput";
import { DocumentCreateNestedManyWithoutBusinessesInput } from "./DocumentCreateNestedManyWithoutBusinessesInput";
import { ItemCreateNestedManyWithoutBusinessesInput } from "./ItemCreateNestedManyWithoutBusinessesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { SettingWhereUniqueInput } from "../../setting/base/SettingWhereUniqueInput";

@InputType()
class BusinessCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountCreateNestedManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => AccountCreateNestedManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => AccountCreateNestedManyWithoutBusinessesInput, {
    nullable: true,
  })
  accounts?: AccountCreateNestedManyWithoutBusinessesInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  bn!: number;

  @ApiProperty({
    required: false,
    type: () => ClientsAndSupplierCreateNestedManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ClientsAndSupplierCreateNestedManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => ClientsAndSupplierCreateNestedManyWithoutBusinessesInput, {
    nullable: true,
  })
  clientsAndSuppliers?: ClientsAndSupplierCreateNestedManyWithoutBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => DocumentCreateNestedManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => DocumentCreateNestedManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => DocumentCreateNestedManyWithoutBusinessesInput, {
    nullable: true,
  })
  documents?: DocumentCreateNestedManyWithoutBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => ItemCreateNestedManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ItemCreateNestedManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => ItemCreateNestedManyWithoutBusinessesInput, {
    nullable: true,
  })
  items?: ItemCreateNestedManyWithoutBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  owner?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SettingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SettingWhereUniqueInput)
  @IsOptional()
  @Field(() => SettingWhereUniqueInput, {
    nullable: true,
  })
  settings?: SettingWhereUniqueInput | null;
}

export { BusinessCreateInput as BusinessCreateInput };
