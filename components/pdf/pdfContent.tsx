import React from "react";
import { Suspense } from "react";
import TableBody from "../tableResults/tableBody";
import TableHeader from "../tableResults/tableHeader";
import Loading from "@/app/login/admin/loading";

const PdfContent = () => {
  return (
    <table className="mx-auto mt-5">
      <TableHeader />
      {/* <TableBody /> */}
    </table>
  );
};

export default PdfContent;
