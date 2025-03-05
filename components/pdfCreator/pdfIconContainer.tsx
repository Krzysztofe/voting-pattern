"use client";

import IconPdf from "../../icons/iconPdf/iconPdf";

type Props = {
  download: () => Promise<void>;
};

const PdfIconContainer = (props: Props) => {
  return (
    <div
      className="absolute left-[1rem] top-[1.9rem]"
      onClick={props.download}
    >
      <IconPdf />
    </div>
  );
};

export default PdfIconContainer;
