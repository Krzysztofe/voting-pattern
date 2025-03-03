import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const TableResults = async () => {
  return (
    <>
      <table className="mx-auto my-5">
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
};

export default TableResults;
