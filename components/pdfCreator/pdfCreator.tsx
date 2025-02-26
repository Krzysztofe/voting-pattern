"use client";

import { getCurrentDateString } from "@/utils/getCurrentDate";
import { getCurrentDateTimeString } from "@/utils/getCurrentTime";
import IconPdf from "../icons/iconPdf/iconPdf";
import TableHeader from "../tableResults/tableHeader";
import usePdfCreator from "./usePdfCreator";

type Props = {
  votes: {
    candidatesBilans: Record<string, number>;
    totalVotes: number;
  };
};

const PdfCreator = (props: Props) => {
  const { pdfRef, download } = usePdfCreator();

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

        <table className="mx-auto mt-5 ">
          <TableHeader />
          <tbody>
            {Object?.entries(props.votes.candidatesBilans).map(
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
      <div className="absolute top-[1.8rem] right-[1.5rem]" onClick={download}>
        <IconPdf />
      </div>
    </>
  );
};

export default PdfCreator;
