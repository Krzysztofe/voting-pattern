import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PdfContentWrapper from "../pdfCreator/pdfContentWrapper";

const TableResults = async () => {
  return (
    <>
      <table className="mx-auto mt-5">
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
};

export default TableResults;
