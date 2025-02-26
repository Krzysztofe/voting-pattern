import HeaderAdminPage from "@/components/headers/headerAdminPage";
import LoadingComponent from "@/components/loadingComponent";
import TableResults from "@/components/tableResults/tableResults";
import React from "react";
import { Suspense } from "react";

const pageAdmin = () => {
  return (
    <>
      <HeaderAdminPage />
      <Suspense fallback={<LoadingComponent color="accent" size="lg" />}>
        <TableResults />
      </Suspense>
    </>
  );
};

export default pageAdmin;
