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
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setDate(getCurrentDateString());
    setTime(getCurrentDateTimeString());
  }, []);

  return (
    <>
      <PdfIconContainer downloadPdf={downloadPdf} />
      <div
        className="relative -z-10"
        style={{ fontSize: "0.5rem", top: "0" }}
        ref={pdfRef}
      >
        <div>
          Wynik głosowania w dniu {date} o godzinie {time}
        </div>

        {props.children}
      </div>
    </>
  );
};

export default PdfContentWrapper;
