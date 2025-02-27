import { z } from "zod";

export const formVoteSchema = z.object({
  candidateName: z.string({ message: "Wymagane" }),
  userName: z
    .string({ message: "Wymagane" })
    .min(3, { message: "Min. 3 znaki" })
    .max(20, { message: "Max. 20 znaków" })
    .trim(),
  userSurname: z
    .string({ message: "Wymagane" })
    .min(3, { message: "Min. 3 znaki" })
    .max(20, { message: "Max. 20 znaków" })
    .trim(),
});
