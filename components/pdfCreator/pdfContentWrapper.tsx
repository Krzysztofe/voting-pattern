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
  const { download, pdfRef } = usePdfCreator();
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setDate(getCurrentDateString());
    setTime(getCurrentDateTimeString());
  }, []);

  return (
    <>
      
      <div
        className="z-10 absolute -left-full px-5 py-1"
        style={{ fontSize: "3px" }}
        ref={pdfRef}
      >xd
        <div className="flex justify-between">
          <div>Wyniki głosowania </div>
          <div>
            <div>Data: {date}</div>
            <div>Godzina: {time}</div>
          </div>
        </div>
        {props.children}
      </div>
      <PdfIconContainer download={download} />
    </>
  );
};

export default PdfContentWrapper;
