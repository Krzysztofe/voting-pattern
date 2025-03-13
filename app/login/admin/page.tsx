import HeaderAdminPage from "@/components/headers/headerAdminPage";
import LoadingComponent from "@/components/loadingComponent";
import PdfContentWrapper from "@/components/pdfCreator/pdfContentWrapper";
import ProtectedRouteWrapper from "@/components/protectedRouteWrapper";
import TableResults from "@/components/tables/tableResults/tableResults";
import TableVotingList from "@/components/tables/tableVotingList/tableVotingList";
import { Suspense } from "react";

const PageAdmin = async () => {
  return (
    <ProtectedRouteWrapper>
      <>
        <HeaderAdminPage />

        <Suspense
          fallback={<LoadingComponent color="text-accent" size="loading-lg" />}
        >
          <PdfContentWrapper>
            <TableResults />
            <TableVotingList />
          </PdfContentWrapper>
          <div className="pb-5">
            <TableResults />
            <TableVotingList />
          </div>
        </Suspense>
      </>
    </ProtectedRouteWrapper>
  );
};

export default PageAdmin;
