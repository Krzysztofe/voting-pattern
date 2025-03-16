import RequestErrorComponent from "@/components/requestErrorComponent";
import { getPaginatedVotesCash } from "@/data-acces/votes";

type Props = {
  start: number;
  perPage: number;
};

const TableBody = async (props: Props) => {
  const { paginatedVotes, paginatedVotesError } = await getPaginatedVotesCash(
    props.start,
    props.perPage
  );

  if (paginatedVotesError) {
    return <RequestErrorComponent />;
  }

  return (
    <>
      <tbody>
        {paginatedVotes?.map(({ candidateName, userFullName }, idx) => {
          return (
            <tr key={userFullName}>
              <td className="border border-accent px-2">
                {props.start + idx + 1}
              </td>
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
