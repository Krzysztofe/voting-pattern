import { prisma } from "@/lib/db";
import { cache } from "react";

const getVotes = async () => {
  try {
    const resp = await prisma.vote.findMany();
    if (!resp) {
      throw new Error("Error");
    }
    console.log("", resp);

    const candidatesBilans = resp.reduce<Record<string, number>>(
      (acc, post) => {
        acc[post.candidateName] = (acc[post.candidateName] || 0) + 1;
        return acc;
      },
      {}
    );

    const totalVotes = Object.values(candidatesBilans).reduce(
      (sum, count) => sum + count,
      0
    );

    const votingList = resp.map(({ candidateName, userFullName }) => {
      return { candidateName, userFullName };
    });

    return {
      candidatesBilans,
      totalVotes,
      votingList,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getVotesCash = cache(getVotes);
