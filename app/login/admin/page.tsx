import HeaderAdminPage from "@/components/headers/headerAdminPage";
import TableResults from "@/components/tables/tableResults/tableResults";
import React from "react";
import { Suspense } from "react";
import Loading from "./loading";
import PdfContentWrapper from "@/components/pdfCreator/pdfContentWrapper";
import TableVotingList from "@/components/tables/tableVotingList/tableVotingList";

const PageAdmin = () => {
  return (
    <>
      <HeaderAdminPage />
      <Suspense fallback={<Loading />}>
        <PdfContentWrapper>
          <TableResults />
        </PdfContentWrapper>
        <TableResults />
        <TableVotingList />
      </Suspense>
    </>
  );
};

export default PageAdmin;
