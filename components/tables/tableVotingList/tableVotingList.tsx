import { prisma } from "@/lib/db";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import PaginationControls from "@/components/paginationControls";

const TableVotingList = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams?.page ?? "1";
  const perPage = searchParams?.perPage ?? "5";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const resp = await prisma.vote.findMany({
    orderBy: { userFullName: "asc" },
    select: {
      candidateName: true,
      userFullName: true,
    },
    skip: start,
    take: Number(perPage),
  });

  return (
    <>
      <table className="mx-auto mt-5">
        <TableHeader />
        <TableBody resp={resp} />
      </table>
      <PaginationControls hasNextPage={end>0} hasPrevPage={start > 0} />
    </>
  );
};

export default TableVotingList;
