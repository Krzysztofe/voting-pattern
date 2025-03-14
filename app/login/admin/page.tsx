import HeaderAdminPage from "@/components/headers/headerAdminPage";
import LoadingComponent from "@/components/loadingComponent";
import PdfContentWrapper from "@/components/pdfCreator/pdfContentWrapper";
import ProtectedRouteWrapper from "@/components/protectedRouteWrapper";
import TableResults from "@/components/tables/tableResults/tableResults";
import TableVotingList from "@/components/tables/tableVotingList/tableVotingList";
import { Suspense } from "react";

const PageAdmin = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <ProtectedRouteWrapper>
      <>
        <HeaderAdminPage />

        <Suspense
          fallback={<LoadingComponent color="text-accent" size="loading-lg" />}
        >
          <PdfContentWrapper>
            <TableResults />
            {/* <TableVotingList searchParams={searchParams} /> */}
          </PdfContentWrapper>
          <div className="pb-5">
            <TableResults />
            {/* <TableVotingList searchParams={searchParams} /> */}
          </div>
        </Suspense>
      </>
    </ProtectedRouteWrapper>
  );
};

export default PageAdmin;
