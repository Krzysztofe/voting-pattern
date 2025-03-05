import HeaderAdminPage from "@/components/headers/headerAdminPage";
import TableResults from "@/components/tables/tableResults/tableResults";
import React from "react";
import { Suspense } from "react";
import PdfContentWrapper from "@/components/pdfCreator/pdfContentWrapper";
import TableVotingList from "@/components/tables/tableVotingList/tableVotingList";
import LoadingComponent from "@/components/loadingComponent";

const PageAdmin = () => {
  return (
    <>
      <HeaderAdminPage />
      <Suspense
        fallback={<LoadingComponent color="accent" size="loading-lg" />}
      >
        <PdfContentWrapper>
          <TableResults />
          <TableVotingList />
        </PdfContentWrapper>
        <TableResults />
        <TableVotingList />
      </Suspense>
    </>
  );
};

export default PageAdmin;
