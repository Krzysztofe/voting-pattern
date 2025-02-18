import React from "react";

const TableBody = () => {
  return (
    <>
      <tbody>
        <tr>
          <td>1</td>
          <td>Jan</td>
          <td>Kowalski</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Anna</td>
          <td>Nowak</td>
          <td>80%</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td>suma głosów </td>
          <td>99</td>
        </tr>
      </tfoot>
    </>
  );
};

export default TableBody;
