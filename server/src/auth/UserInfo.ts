import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user/base/User";

@ObjectType()
export class GorderUserData {
  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => [String], { nullable: true })
  permissions?: string[];

  @Field(() => Number, { nullable: true })
  type?: number;

  @Field(() => String, { nullable: true })
  orgId?: string;

  @Field(() => String, { nullable: true })
  orgName?: string;

  @Field(() => String, { nullable: true })
  orgLogo?: string;

  @Field(() => String, { nullable: true })
  primaryColor?: string;

  @Field(() => String, { nullable: true })
  employeeId?: string;

  @Field(() => String, { nullable: true })
  imgPath?: string;

  @Field(() => String, { nullable: true })
  fullname?: string;
}

@ObjectType()
export class UserInfo implements Partial<User> {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  username!: string;

  @Field(() => [String])
  roles!: string[];

  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => String, { nullable: true })
  gorderAccessToken?: string;

  // Including GorderUserData in UserInfo
  @Field(() => GorderUserData, { nullable: true })
  gorderUserData?: GorderUserData;
}
