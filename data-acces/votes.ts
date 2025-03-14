import "server-only";
import { prisma } from "@/lib/db";
import { cache } from "react";

export const getVotesSumm = async () => {
  return await prisma.vote.count();
};

export const getVotesSummCash = cache(getVotesSumm);
