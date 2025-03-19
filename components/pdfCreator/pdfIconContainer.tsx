"use client";

import { headerAdminTop } from "@/data/numbers/dataNumbers";
import IconPdf from "../../icons/iconPdf/iconPdf";

type Props = {
  downloadPdf: () => Promise<void>;
};

const PdfIconContainer = (props: Props) => {
  return (
    <div
      className={`absolute left-[1rem] ${headerAdminTop}`}
      onClick={props.downloadPdf}
      onTouchStart={props.downloadPdf}
    >
      <IconPdf />
    </div>
  );
};

export default PdfIconContainer;
