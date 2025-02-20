import HeaderAdminPage from "@/components/headers/headerAdminPage";
import TableResults from "@/components/tableResults/tableResults";
import React from "react";

const pageAdmin = () => {
  return (
    <main>
      {/* <div className="">
        <span className="loading loading-ring loading-sm bg-accent"></span>
      </div> */}
      <HeaderAdminPage />
      <TableResults />
    </main>
  );
};

export default pageAdmin;
