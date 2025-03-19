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
import { getVotesSummCash } from "@/actions/data-acces/votes";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<Record<string, string[] | undefined>>;
};

const PageAdmin = async (props: Props) => {
  const { totalVotesError, totalVotes } = await getVotesSummCash();
  if (totalVotesError) return <RequestErrorComponent />;
  if (!totalVotes) return <NoRecordsComponent />;

  const pageParam = (await props.searchParams).page ?? "1";

  const page = Number(Array.isArray(pageParam) ? pageParam[0] : pageParam) || 1;

  const perPage = 20;
  const totalPages = Math.ceil(totalVotes / perPage);
  const validPage = Math.min(page, totalPages);
  const startIdx = (validPage - 1) * perPage;
  const endIndex = startIdx + perPage;

  const renderTableContent = () => {
    if (totalVotesError) return <RequestErrorComponent />;
    if (!totalVotes) return <NoRecordsComponent />;

    return (
      <>
        <TableResults />
        <table className="mx-auto mt-5">
          <TableHeader />
          <TableBody startIdx={startIdx} perPage={perPage} />
        </table>
        <PaginationControls
          hasNextPage={endIndex < totalVotes}
          hasPrevPage={startIdx > 0}
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
