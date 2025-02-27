"use client";
import { getCurrentDateString } from "@/utils/getCurrentDate";
import { getCurrentDateTimeString } from "@/utils/getCurrentTime";
import usePdfCreator from "./usePdfCreator";
import { ReactNode } from "react";
import PdfIconContainer from "./pdfIconContainer";


type Props = {
  children: ReactNode;
 
};

const PdfContentWrapper = (props:Props) => {
  const { download, pdfRef } = usePdfCreator();

  return (
    <>
     <div
      className="z-10 absolute -left-full p-5"
      style={{ fontSize: "10px" }}
      ref={pdfRef}
    >
      <div className="flex justify-between">
        <div className="">Wyniki głosowania </div>
        <div className="">
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
