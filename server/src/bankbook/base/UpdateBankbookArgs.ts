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
import { BankbookWhereUniqueInput } from "./BankbookWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BankbookUpdateInput } from "./BankbookUpdateInput";

@ArgsType()
class UpdateBankbookArgs {
  @ApiProperty({
    required: true,
    type: () => BankbookWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BankbookWhereUniqueInput)
  @Field(() => BankbookWhereUniqueInput, { nullable: false })
  where!: BankbookWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BankbookUpdateInput,
  })
  @ValidateNested()
  @Type(() => BankbookUpdateInput)
  @Field(() => BankbookUpdateInput, { nullable: false })
  data!: BankbookUpdateInput;
}

export { UpdateBankbookArgs as UpdateBankbookArgs };