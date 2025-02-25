import React from "react";

const TableBodyEmpty = () => {
  return (
    <tbody>
      <tr>
        <td colSpan={3} className="text-center pt-6">
          Brak głosów
        </td>
      </tr>
    </tbody>
  );
};

export default TableBodyEmpty;
