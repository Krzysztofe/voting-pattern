import { getVotesCash } from "@/actions/getVotes";
import TableBodyEmpty from "../tableResults/tableBodyEmpty";

const TableBody = async () => {
  const votes = await getVotesCash();

  if (!votes || votes?.totalVotes === 0) return <TableBodyEmpty />;

  return (
    <>
      <tbody>
        {votes.votingList.map(({ candidateName, userFullName }, idx) => {
          return (
            <tr key={userFullName}>
              <td className="border border-accent px-2">{idx + 1}</td>
              <td className="border border-accent px-2">{userFullName}</td>
              <td className="border border-accent px-2">{candidateName}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default TableBody;
