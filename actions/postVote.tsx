"use server";

import { formVoteSchema } from "@/components/forms/formVoteSubmition/formVoteSchema";
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
    let errorMsg: Record<string, string> = {};

    validationResult.error.issues.forEach(issue => {
      errorMsg[issue.path[0]] = issue.message;
    });

    return {
      error: errorMsg,
    };
  }
  const { candidateName, userName, userSurname } = validationResult.data;
  const userFullName = `${userName} ${userSurname}`;

  const votes = await prisma.vote.findMany();

  const usersFullNames = votes.map(vote => {
    return vote.userFullName;
  });

  const isUserRegistered = usersFullNames.includes(userFullName);

  if (isUserRegistered) {
    return {
      isRegistered: "Głosujący już oddał głos",
    };
  }

  try {
    await prisma.vote.create({
      data: {
        candidateName,
        userFullName: userFullName,
      },
    });

    revalidatePath("/login/admin");
    return { message: "Głos oddany pomyślnie" };
  } catch (error) {
    return { message: "Błąd podczas oddawania głosu" };
  }
};
