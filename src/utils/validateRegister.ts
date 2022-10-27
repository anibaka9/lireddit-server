import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  console.log("options: ", options);
  if (!options.email.includes("@")) {
    return [{ field: "email", message: "invalid email" }];
  }

  if (options.username.includes("@")) {
    return [{ field: "username", message: "cannot include @" }];
  }

  if (options.username.length <= 2) {
    return [{ field: "username", message: "length must be greater than 2" }];
  }

  if (options.password.length <= 3) {
    [{ field: "password", message: "length must be greater than 3" }];
  }

  return null;
};
