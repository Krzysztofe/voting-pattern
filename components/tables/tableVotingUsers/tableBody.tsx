import RequestErrorComponent from "@/components/requestErrorComponent";
import { getPaginatedVotesCash } from "@/actions/data-acces/votes";

type Props = {
  startIdx: number;
  perPage: number;
};

const TableBody = async (props: Props) => {
  const { paginatedVotes, paginatedVotesError } = await getPaginatedVotesCash(
    props.startIdx,
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
                {props.startIdx + idx + 1}
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
