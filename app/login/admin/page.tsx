import HeaderAdminPage from "@/components/headers/headerAdminPage";
import LoadingComponent from "@/components/loadingComponent";
import NoRecordsComponent from "@/components/noRecordsComponent";
import PaginationControls from "@/components/paginationControls";
import PdfContentWrapper from "@/components/pdfCreator/pdfContentWrapper";
import ProtectedRouteWrapper from "@/components/protectedRouteWrapper";
import RequestErrorComponent from "@/components/requestErrorComponent";
import TableResults from "@/components/tables/tableResults/tableResults";
import TableBody from "@/components/tables/tableVotingUsers/tableBody";
import TableHeader from "@/components/tables/tableVotingUsers/tableHeader";
import { getVotesSummCash } from "@/data-acces/votes";
import { Suspense } from "react";

const PageAdmin = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const perPage = 3;
  const { page = "1" } = await searchParams;
  const start = (Number(page) - 1) * perPage;
  const end = start + Number(perPage);

  const { totalVotesError, totalVotes } = await getVotesSummCash();

  const renderTableContent = () => {
    if (totalVotesError) return <RequestErrorComponent />;
    if (!totalVotes) return <NoRecordsComponent />;

    return (
      <>
        <TableResults />
        <table className="mx-auto mt-5">
          <TableHeader />
          <TableBody start={start} perPage={perPage} />
        </table>
        <PaginationControls
          hasNextPage={end < totalVotes}
          hasPrevPage={start > 0}
          totalVotes={totalVotes}
          perPage={perPage}
        />
      </>
    );
  };

  return (
    <ProtectedRouteWrapper>
      <HeaderAdminPage />
      <Suspense
        fallback={<LoadingComponent color="text-accent" size="loading-lg" />}
      >
        <PdfContentWrapper>{renderTableContent()}</PdfContentWrapper>
        <div className="pb-5">{renderTableContent()}</div>
      </Suspense>
    </ProtectedRouteWrapper>
  );
};

export default PageAdmin;
