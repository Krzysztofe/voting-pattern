import { prisma } from "@/lib/db";

const TableBody = async () => {
  const posts = await prisma.post.findMany();

  const candidatsData = posts?.reduce((acc: any, post: any) => {

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
              <td>{idx + 1}</td>
              <td>{candidate[0]}</td>
              <td>{candidate[1]}</td>
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        <tr>
          <td></td>
          <td className="text-end">suma: </td>
          <td>{allVotes}</td>
        </tr>
      </tfoot>
    </>
  );
};

export default TableBody;
