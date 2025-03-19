import RequestErrorComponent from "@/components/requestErrorComponent";
import {
  getCandidateVotesCountCash,
  getVotesSummCash,
} from "@/actions/data-acces/votes";

const TableBody = async () => {
  const { candidatesSummary, candidatesSummaryError } =
    await getCandidateVotesCountCash();
  const { totalVotes, totalVotesError } = await getVotesSummCash();

  if (totalVotesError || candidatesSummaryError)
    return <RequestErrorComponent />;
  if (!totalVotes || totalVotes === 0) return;

  return (
    <>
      <tbody>
        {candidatesSummary?.map(({ candidateName, count }, idx) => (
          <tr key={candidateName}>
            <td className="border border-accent px-2">{idx + 1}</td>
            <td className="border border-accent px-2">{candidateName}</td>
            <td className="border border-accent px-2">{count}</td>
          </tr>
        ))}
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
