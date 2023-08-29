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
import { AccountUpdateManyWithoutBusinessesInput } from "./AccountUpdateManyWithoutBusinessesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { DocumentUpdateManyWithoutBusinessesInput } from "./DocumentUpdateManyWithoutBusinessesInput";

@InputType()
class BusinessUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccountUpdateManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => AccountUpdateManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => AccountUpdateManyWithoutBusinessesInput, {
    nullable: true,
  })
  accounts?: AccountUpdateManyWithoutBusinessesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  data?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => DocumentUpdateManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => DocumentUpdateManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => DocumentUpdateManyWithoutBusinessesInput, {
    nullable: true,
  })
  documents?: DocumentUpdateManyWithoutBusinessesInput;
}

export { BusinessUpdateInput as BusinessUpdateInput };
