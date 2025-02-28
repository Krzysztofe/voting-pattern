import HeaderAdminPage from "@/components/headers/headerAdminPage";
import TableResults from "@/components/tableResults/tableResults";
import React from "react";
import { Suspense } from "react";
import Loading from "./loading";
import PdfContentWrapper from "@/components/pdfCreator/pdfContentWrapper";

const PageAdmin = () => {
  return (
    <>
      <HeaderAdminPage />
      <Suspense fallback={<Loading />}>
        <PdfContentWrapper>
          <TableResults />
        </PdfContentWrapper>
        <TableResults />
      </Suspense>
    </>
  );
};

export default PageAdmin;
