import { InputType } from "type-graphql";
import { User } from "../../entity/User";
import { Field } from "type-graphql";
import { IsEmail, MinLength, MaxLength, IsString } from "class-validator";

@InputType()
export class RegisterInput implements Partial<User> {
  @Field()
  @IsString()
  username: string;

  @Field()
  @MinLength(3)
  @MaxLength(255)
  email: string;

  @Field()
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password: string;
}
