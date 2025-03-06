"use server";

import { formVoteSchema } from "@/components/forms/formVote/formVoteSchema";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const postVote = async (
  votingValues: unknown
): Promise<
  | { message?: string; error?: Record<string, string>; isRegistered?: string }
  | undefined
> => {
  const validationResult = formVoteSchema.safeParse(votingValues);

  if (!validationResult.success) {
    const errorMsg: Record<string, string> = {};

    validationResult.error.issues.forEach(issue => {
      errorMsg[issue.path[0]] = issue.message;
    });

    return {
      error: errorMsg,
    };
  }
  const { candidateName, userName, userSurname } = validationResult.data;
  const userFullName = ` ${userSurname} ${userName}`;

  try {
    const existingVote = await prisma.vote.findFirst({
      where: { userFullName },
    });

    if (existingVote) {
      return { isRegistered: "Użytkownik już oddał głos" };
    }

    await prisma.vote.create({
      data: {
        candidateName,
        userFullName,
      },
    });

    revalidatePath("/login/admin");
    return { message: "Głos oddany pomyślnie" };
  } catch (error) {
    console.error("Error during vote submission: ", error);

    return { message: "Błąd. Spróbuj ponownie" };
  }
};
