import HeaderAdminPage from "@/components/headers/headerAdminPage";
import LoadingComponent from "@/components/loadingComponent";
import NoRecordsComponent from "@/components/noRecordsComponent";
import PdfContentWrapper from "@/components/pdfCreator/pdfContentWrapper";
import ProtectedRouteWrapper from "@/components/protectedRouteWrapper";
import TableResults from "@/components/tables/tableResults/tableResults";
import TableVotingList from "@/components/tables/tableVotingList/tableVotingList";
import { getVotesSummCash } from "@/data-acces/votes";
import { Suspense } from "react";

const PageAdmin = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const votesCount = await getVotesSummCash();

  let tables;

  if (votesCount) {
    tables = (
      <>
        <TableResults />
        {/* <TableVotingList searchParams={searchParams} /> */}
      </>
    );
  } else {
    tables = <NoRecordsComponent />;
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
