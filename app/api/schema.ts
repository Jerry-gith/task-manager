import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: "A name cannot be less than 6 charaters!" }),

  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),

  password: z
    .string()
    .min(6, { message: "Your password cannot be less than 6 charaters!" }),
});

export const signInSchema = z.object({
  loginId: z.union([
    z
      .string()
      .min(1, { message: "Kindly enter your Username or Email to login." })
      .email("This is not a valid email."),

    z
      .string()
      .min(1, { message: "Kindly enter your Username or Email to login." }),
  ]),
  password: z
    .string()
    .min(1, { message: "Kindly enter your password to login." }),
});
