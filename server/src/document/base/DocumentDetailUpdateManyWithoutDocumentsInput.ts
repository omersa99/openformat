/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DocumentDetailWhereUniqueInput } from "../../documentDetail/base/DocumentDetailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DocumentDetailUpdateManyWithoutDocumentsInput {
  @Field(() => [DocumentDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DocumentDetailWhereUniqueInput],
  })
  connect?: Array<DocumentDetailWhereUniqueInput>;

  @Field(() => [DocumentDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DocumentDetailWhereUniqueInput],
  })
  disconnect?: Array<DocumentDetailWhereUniqueInput>;

  @Field(() => [DocumentDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DocumentDetailWhereUniqueInput],
  })
  set?: Array<DocumentDetailWhereUniqueInput>;
}

export { DocumentDetailUpdateManyWithoutDocumentsInput as DocumentDetailUpdateManyWithoutDocumentsInput };
