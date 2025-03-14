import { getVotesCash } from "@/actions/getVotes";
import { prisma } from "@/lib/db";
import {
  getVotesSummCash,
  getCandidateVotesCountCash,
} from "@/data-acces/votes";

const TableBody = async () => {
  const votes = await getVotesCash();

  const votesCount = await getVotesSummCash();
  const candidateVotes = await getCandidateVotesCountCash();

  console.log("", votesCount);

  if (!votes || votes?.totalVotes === 0) return 
  return (
    <>
      <tbody>
        {Object?.entries(votes?.candidatesBilans).map(
          ([candidateName, count], idx) => (
            <tr key={candidateName}>
              <td className="border border-accent px-2">{idx + 1}</td>
              <td className="border border-accent px-2">{candidateName}</td>
              <td className="border border-accent px-2">{count}</td>
            </tr>
          )
        )}
      </tbody>
      <tfoot>
        <tr>
          <td className="px-2"></td>
          <td className="text-end px-2">Suma: </td>
          <td className="px-2">{votesCount}</td>
        </tr>
      </tfoot>
    </>
  );
};

export default TableBody;
