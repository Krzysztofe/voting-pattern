import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PdfCreator from "../pdfCreator/pdfCreator";
import { getVotes } from "./getVotes";

const TableResults = async () => {
  const votes = await getVotes();

  if (!votes) return
  return (
    <>
      <PdfCreator votes={votes} />
      <table className="mx-auto mt-5">
        <TableHeader />
        <TableBody votes={votes} />
      </table>
    </>
  );
};

export default TableResults;
