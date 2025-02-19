"use server";

export const postVote = async (formData: FormData) => {
  const candidateName = formData.get("candidateName") as string;
  const userName = formData.get("userName") as string;
  const userSurname = formData.get("userSurname") as string;
  console.log( userName, userSurname, candidateName);
};
