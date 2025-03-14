import { getVotesCash } from "@/actions/getVotes";
import TableBodyEmpty from "../tableResults/tableBodyEmpty";
import PaginationControls from "@/components/paginationControls";

const TableBody = async (resp: any) => {
  const votes = await getVotesCash();

  if (!resp) {
    return <TableBodyEmpty />;
  }

  return (
    <>
      <tbody>
        {resp?.resp.map(
          (
            {
              candidateName,
              userFullName,
            }: { candidateName: any; userFullName: any },
            idx: any
          ) => {
            return (
              <tr key={userFullName}>
                <td className="border border-accent px-2">{idx + 1}</td>
                <td className="border border-accent px-2">{userFullName}</td>
                <td className="border border-accent px-2">{candidateName}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </>
  );
};

export default TableBody;
