import "server-only";
import { prisma } from "@/lib/db";
import { cache } from "react";
import { isAdminLogged } from "@/utils/isAdminLogged";

const getVotesSumm = async () => {
  await isAdminLogged();
  return await prisma.vote.count();
};

export const getVotesSummCash = cache(getVotesSumm);

const getCandidateVotesCount = async () => {
  await isAdminLogged();
  const groupedVotes = await prisma.vote.groupBy({
    by: ["candidateName"],
    _count: {
      candidateName: true,
    },
    orderBy: {
      candidateName: "asc",
    },
  });

  return groupedVotes.map(vote => ({
    candidateName: vote.candidateName,
    count: vote._count.candidateName,
  }));
};

export const getCandidateVotesCountCash = cache(getCandidateVotesCount);
