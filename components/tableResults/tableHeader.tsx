import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="bg-accent border border-accent border-r-white "></th>
        <th className="text-start bg-accent text-white px-2 border border-y-accent font-normal">
          Kandydat
        </th>
        <th className="text-start bg-accent text-white px-2 border border-accent border-l-white font-normal">
          Oddane głosy
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
