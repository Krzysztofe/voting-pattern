import HeaderAdminPage from "@/components/headers/headerAdminPage";
import TableResults from "@/components/tableResults/tableResults";
import React from "react";

const pageAdmin = () => {
  return (
    <main>
      <HeaderAdminPage />
      <TableResults />
    </main>
  );
};

export default pageAdmin;
