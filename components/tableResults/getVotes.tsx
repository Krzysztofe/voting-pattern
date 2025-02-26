import { prisma } from "@/lib/db";
import { cache } from "react";

// Use cache to make it compatible with React Suspense
export const getVotes = cache(async () => {
  try {
    const resp = await prisma.vote.findMany();
    if (!resp) {
      throw new Error("Error");
    }

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

    return {
      candidatesBilans,
      totalVotes,
    };
  } catch (error) {
    console.error("Error fetching votes:", error);
    return [];
  }
});
