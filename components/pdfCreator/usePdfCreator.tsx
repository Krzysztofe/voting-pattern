import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useRef } from "react";

const usePdfCreator = () => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const download = async () => {
    const element = pdfRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, { scale: 3 });
      const data = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
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

  return { pdfRef, download };
};

export default usePdfCreator;
