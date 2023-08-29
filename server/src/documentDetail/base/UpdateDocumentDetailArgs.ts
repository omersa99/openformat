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
import { DocumentDetailWhereUniqueInput } from "./DocumentDetailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DocumentDetailUpdateInput } from "./DocumentDetailUpdateInput";

@ArgsType()
class UpdateDocumentDetailArgs {
  @ApiProperty({
    required: true,
    type: () => DocumentDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentDetailWhereUniqueInput)
  @Field(() => DocumentDetailWhereUniqueInput, { nullable: false })
  where!: DocumentDetailWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DocumentDetailUpdateInput,
  })
  @ValidateNested()
  @Type(() => DocumentDetailUpdateInput)
  @Field(() => DocumentDetailUpdateInput, { nullable: false })
  data!: DocumentDetailUpdateInput;
}

export { UpdateDocumentDetailArgs as UpdateDocumentDetailArgs };
