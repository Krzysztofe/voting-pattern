import HeaderAdminPage from "@/components/headers/headerAdminPage";
import LoadingComponent from "@/components/loadingComponent";
import NoRecordsComponent from "@/components/noRecordsComponent";
import PaginationControls from "@/components/paginationControls";
import PdfContentWrapper from "@/components/pdfCreator/pdfContentWrapper";
import ProtectedRouteWrapper from "@/components/protectedRouteWrapper";
import RequestErrorComponent from "@/components/requestErrorComponent";
import TableHeader from "@/components/tables/tableResults/tableHeader";
import TableResults from "@/components/tables/tableResults/tableResults";
import TableBody from "@/components/tables/tableVotingUsers/tableBody";
import { getVotesSummCash } from "@/data-acces/votes";
import { Suspense } from "react";

const PageAdmin = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page = "1", perPage = "5" } = await searchParams;
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const { totalVotesError, totalVotes } = await getVotesSummCash();

  let tables;
  if (totalVotesError) {
    tables = <RequestErrorComponent />;
  } else if (!totalVotes || totalVotes === 0) {
    tables = <NoRecordsComponent />;
  } else {
    tables = (
      <>
        <TableResults />
        <Suspense
          fallback={<LoadingComponent color="text-accent" size="loading-lg" />}
        >
          <table className="mx-auto mt-5">
            <TableHeader />
            <TableBody start={start} perPage={Number(perPage)} />
          </table>
          <PaginationControls
            hasNextPage={end <= totalVotes}
            hasPrevPage={start > 0}
            totalVotes={totalVotes}
          />
        </Suspense>
      </>
    );
  }

  return (
    <ProtectedRouteWrapper>
      <>
        <HeaderAdminPage />
        <Suspense
          fallback={<LoadingComponent color="text-accent" size="loading-lg" />}
        >
          <PdfContentWrapper>{tables}</PdfContentWrapper>
          <div className="pb-5">{tables}</div>
        </Suspense>
      </>
    </ProtectedRouteWrapper>
  );
};

export default PageAdmin;
