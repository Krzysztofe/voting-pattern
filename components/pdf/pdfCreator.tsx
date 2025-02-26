"use client";

import IconPdf from "../icons/iconPdf/iconPdf";
import { useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import TableBody from "../tableResults/tableBody";
import TableHeader from "../tableResults/tableHeader";
import { Suspense } from "react";
import Loading from "@/app/login/admin/loading";
import PdfContent from "./pdfContent";
import { getCurrentDateString } from "@/utils/getCurrentDate";

type Props = {
  votes: any;
};

const PdfCreator = (props: Props) => {
  console.log("eee", props.votes);
  const pdfRef = useRef<HTMLDivElement>(null);

  const download = async () => {
    const element = pdfRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, { scale: 2 });
      const data = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: "a4",
      });
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("wynik-głosowania.pdf");
    } catch (error) {
      console.log("", error);
    }
  };

  return (
    <div onClick={download}>
      <div className="z-10 absolute -left-full p-5" ref={pdfRef}>
        <div>Wyniki głosowania: {getCurrentDateString()}</div>
        <table className="mx-auto mt-5 ">
          <TableHeader />
          <tbody>
            {Object?.entries(props.votes?.candidatesBilans).map(
              ([candidateName, voteCount]: [any, any], idx) => (
                <tr key={candidateName}>
                  <td className="border border-accent px-2">{idx + 1}</td>
                  <td className="border border-accent px-2">{candidateName}</td>
                  <td className="border border-accent px-2">{voteCount}</td>
                </tr>
              )
            )}
          </tbody>

          <tfoot>
            <tr>
              <td className="px-2"></td>
              <td className="text-end px-2">Suma: </td>
              <td className="px-2">{props.votes.totalVotes}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <IconPdf />
    </div>
  );
};

export default PdfCreator;
