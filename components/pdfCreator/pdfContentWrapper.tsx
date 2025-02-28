"use client";
import { getCurrentDateString } from "@/utils/getCurrentDate";
import { getCurrentDateTimeString } from "@/utils/getCurrentTime";
import usePdfCreator from "./usePdfCreator";
import { ReactNode } from "react";
import PdfIconContainer from "./pdfIconContainer";

type Props = {
  children: ReactNode;
};

const PdfContentWrapper = (props: Props) => {
  const { download, pdfRef } = usePdfCreator();

  return (
    <>
      <div
        className="z-10 absolute -left-full px-5 py-1"
        style={{ fontSize: "3px" }}
        ref={pdfRef}
      >
        <div className="flex justify-between">
          <div>Wyniki głosowania </div>
          <div>
            <div>Data: {getCurrentDateString()}</div>
            <div>Godzina: {getCurrentDateTimeString()}</div>
          </div>
        </div>
        {props.children}
      </div>
      <PdfIconContainer download={download} />
    </>
  );
};

export default PdfContentWrapper;
