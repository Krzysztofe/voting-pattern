import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="text-start bg-accent text-white px-2 border border-y-accent font-normal">
          lp
        </th>
        <th className="text-start bg-accent text-white px-2 border border-y-accent font-normal">
          Głosujący
        </th>
        <th className="text-start bg-accent text-white px-2 border border-accent border-l-white font-normal">
          Głos
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
