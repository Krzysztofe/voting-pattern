"use server";

import { formVoteSchema } from "@/components/forms/formVoteSubmition/formVoteSchema";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const postVote = async (
  votingValues: unknown
): Promise<
  { message?: string; error?: Record<string, string> } | undefined
> => {
  const validationResult = formVoteSchema.safeParse(votingValues);
  console.log("rrrrrrrrr");

  if (!validationResult.success) {
    let errorMsg: Record<string, string> = {};

    validationResult.error.issues.forEach(issue => {
      errorMsg[issue.path[0]] = issue.message;
    });

    return {
      error: errorMsg,
    };
  }

  // console.log("vot", votingValues);

  try {
    await prisma.post.create({
      data: validationResult.data,
    });

    revalidatePath("/login/admin");

    return { message: "Głos oddany pomyślnie!" };
  } catch (error) {
    return { message: "Błąd podczas oddawania głosu. Spróbuj ponownie." };
  }
};
