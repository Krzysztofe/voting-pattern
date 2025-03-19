"use client";
import { getCurrentDateString } from "@/utils/getCurrentDate";
import { getCurrentDateTimeString } from "@/utils/getCurrentTime";
import usePdfCreator from "./usePdfCreator";
import { ReactNode, useState, useEffect } from "react";
import PdfIconContainer from "./pdfIconContainer";

type Props = {
  children: ReactNode;
};

const PdfContentWrapper = (props: Props) => {
  const { downloadPdf, pdfRef } = usePdfCreator();
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setDate(getCurrentDateString());
    setTime(getCurrentDateTimeString());
  }, []);

  return (
    <>
      <div
        className="-z-10 relative "
        style={{ fontSize: "10px" }}
        ref={pdfRef}
      >
        <div>
          Wynik głosowania w dniu {date} o godzinie {time}
        </div>

        {props.children}
      </div>
      <PdfIconContainer downloadPdf={downloadPdf} />
    </>
  );
};

export default PdfContentWrapper;
