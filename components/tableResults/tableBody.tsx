import { prisma } from "@/lib/db";
import TableBodyEmpty from "./tableBodyEmpty";

const TableBody = async () => {
  const votes = await prisma.vote.findMany();
  const candidatesBilans = votes?.reduce<Record<string, number>>(
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

  if (!votes || votes.length === 0) {
    return <TableBodyEmpty />;
  }
  return (
    <>
      <tbody>
        {Object.entries(candidatesBilans).map(
          (candidate: [string, number], idx) => {
            return (
              <tr key={candidate[0]}>
                <td className="border border-accent px-2">{idx + 1}</td>
                <td className="border border-accent px-2">{candidate[0]}</td>
                <td className="border border-accent px-2">{candidate[1]}</td>
              </tr>
            );
          }
        )}
      </tbody>

      <tfoot>
        <tr>
          <td className="px-2"></td>
          <td className="text-end px-2">Suma: </td>
          <td className="px-2">{totalVotes}</td>
        </tr>
      </tfoot>
    </>
  );
};

export default TableBody;
