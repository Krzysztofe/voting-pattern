import { prisma } from "@/lib/db";

const TableBody = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 10000);
  });
  const votes = await prisma.vote.findMany();
  console.log("vot", votes);
  if (!votes || votes.length === 0) {
    return <div>Brak oddanych głosów</div>;
  }
  const candidatsData = votes?.reduce((acc: any, post: any) => {
    acc[post.candidateName] = (acc[post.candidateName] || 0) + 1;

    return acc;
  }, {});

  const allVotes = Object.values(candidatsData).reduce(
    (acc: any, votes: any) => acc + votes
  ) as number;

  return (
    <>
      <tbody>
        {Object.entries(candidatsData).map((candidate: any, idx) => {
          return (
            <tr key={candidate[0]}>
              <td className="border border-accent px-2">{idx + 1}</td>
              <td className="border border-accent px-2">{candidate[0]}</td>
              <td className="border border-accent px-2">{candidate[1]}</td>
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        <tr>
          <td className="px-2"></td>
          <td className="text-end px-2">Suma: </td>
          <td className="px-2">{allVotes}</td>
        </tr>
      </tfoot>
    </>
  );
};

export default TableBody;
