import { Resolver, Mutation, InputType, Field, Arg } from "type-graphql";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  register(
    @Arg("options" /* , () => UsernamePasswordInput */)
    options: UsernamePasswordInput
    @Ctx() 
  ) {
    return "by";
  }
}
