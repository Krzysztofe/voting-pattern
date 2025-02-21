"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const postVote = async (
  prevState: { message: string } | undefined,
  formData: FormData
): Promise<{ message: string } | undefined> => {
  const candidateName = formData
    .get("candidateName")
    ?.toString()
    .trim() as string;
  const userName = formData.get("userName")?.toString().trim() as string;
  const userSurname = formData.get("userSurname")?.toString().trim() as string;

  if (!candidateName || !userName || !userSurname) {
    return { message: "Wymagane" };
  }

  try {
    await prisma.post.create({
      data: {
        candidateName,
        userName,
        userSurname,
      },
    });

    revalidatePath("/login/admin");

    return { message: "Głos oddany pomyślnie!" };
  } catch (error) {
    return { message: "Błąd podczas oddawania głosu. Spróbuj ponownie." };
  }
};
