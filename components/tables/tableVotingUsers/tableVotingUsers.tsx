import { prisma } from "@/lib/db";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import PaginationControls from "@/components/paginationControls";
import { getPaginatedVotesCash } from "@/data-acces/votes";

const TableVotingUsers = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams?.page ?? "1";
  const perPage = searchParams?.perPage ?? "5";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const { paginatedVotes, paginatedVotesError } = await getPaginatedVotesCash(
    start,
    Number(perPage)
  );

  return (
    <>
      {/* <table className="mx-auto mt-5">
        <TableHeader />
        <TableBody resp={paginatedVotes} />
      </table>
      <PaginationControls hasNextPage={end > 0} hasPrevPage={start > 0} /> */}
    </>
  );
};

export default TableVotingUsers;
