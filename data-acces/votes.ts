import "server-only";
import { prisma } from "@/lib/db";
import { cache } from "react";
import { isAdminLogged } from "@/utils/isAdminLogged";

const getVotesSumm = async () => {
  await isAdminLogged();
  try {
    const totalVotes = await prisma.vote.count();

    if (totalVotes === null || totalVotes === undefined) {
      throw new Error("Failed to fetch total votes");
    }

    return { totalVotes };
  } catch (error) {
    console.error("Error in getVotesSumm:", error);
    return { totalVotesError: "Błąd. Ponów próbę" };
  }
};

export const getVotesSummCash = cache(getVotesSumm);

const getCandidateVotesCount = async () => {
  await isAdminLogged();
  try {
    const groupedVotes = await prisma.vote.groupBy({
      by: ["candidateName"],
      _count: {
        candidateName: true,
      },
      orderBy: {
        candidateName: "asc",
      },
    });

    if (!groupedVotes) {
      throw new Error("No candidate votes found");
    }

    const candidatesSummary = groupedVotes.map(vote => ({
      candidateName: vote.candidateName,
      count: vote._count.candidateName,
    }));

    return { candidatesSummary };
  } catch (error) {
    console.error("Error in getCandidateVotesCount:", error);
    return { candidatesSummaryError: "Błąd. Ponów próbę" };
  }
};

export const getCandidateVotesCountCash = cache(getCandidateVotesCount);

const getPaginatedVotes = async (start: number, perPage: number) => {
  await isAdminLogged();

  // await new Promise(resolve => setTimeout(resolve, 5000));

  try {
    const paginatedVotes = await prisma.vote.findMany({
      orderBy: { userFullName: "asc" },
      select: {
        candidateName: true,
        userFullName: true,
      },
      skip: start,
      take: Number(perPage),
    });

    if (!paginatedVotes) {
      throw new Error("No paginated votes found");
    }
    return { paginatedVotes };
  } catch (error) {
    console.error("Error fetching paginated votes:", error);
    return { paginatedVotesError: "Błąd. Ponów próbę" };
  }
};

export const getPaginatedVotesCash = cache(getPaginatedVotes);
