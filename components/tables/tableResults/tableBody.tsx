import { getVotesCash } from "@/actions/getVotes";
import TableBodyEmpty from "./tableBodyEmpty";
import { prisma } from "@/lib/db";
import { getVotesSummCash } from "@/data-acces/votes";

const TableBody = async () => {
  const votes = await getVotesCash();

  const votesCount = await getVotesSummCash();

  const candidateVotes = async (name: string) => {
    return await prisma.vote.count({
      where: {
        candidateName: name,
      },
    });
  };

  if (!votes || votes?.totalVotes === 0) return <TableBodyEmpty />;
  return (
    <>
      <tbody>
        {Object?.entries(votes?.candidatesBilans).map(
          ([candidateName, voteCount], idx) => (
            <tr key={candidateName}>
              <td className="border border-accent px-2">{idx + 1}</td>
              <td className="border border-accent px-2">{candidateName}</td>
              <td className="border border-accent px-2">
                {candidateVotes(candidateName)}
              </td>
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
