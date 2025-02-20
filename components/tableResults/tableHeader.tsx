import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="bg-accent text-white px-2 border border-accent border-r-white font-thin">
          
        </th>
        <th className="text-start bg-accent text-white px-2 border border-y-accent font-thin">
          Kandydat
        </th>
        <th className="text-start bg-accent text-white px-2 border border-accent border-l-white font-thin">
          Oddane głosy
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
