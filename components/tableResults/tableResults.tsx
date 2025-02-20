import { Suspense } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Loading from "@/app/login/admin/loading";

const TableResults = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <table className="mx-auto mt-5">
          <TableHeader />
          <TableBody />
        </table>
      </Suspense>
    </>
  );
};

export default TableResults;
