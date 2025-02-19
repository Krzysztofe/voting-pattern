import { Suspense } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Loading from "@/app/login/admin/loading";
Loading;

const TableResults = () => {
  return (
    <table>
      <Suspense fallback={<Loading />}>
        <TableHeader />
        <TableBody />
      </Suspense>
    </table>
  );
};

export default TableResults;
