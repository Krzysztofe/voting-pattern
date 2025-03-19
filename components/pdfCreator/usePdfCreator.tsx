import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useRef } from "react";


const usePdfCreator = () => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const downloadPdf = async () => {
    const element = pdfRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, { scale: 4 });
      const imageData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const scaledHeight = (imgHeight * pdfWidth) / imgWidth;

      const marginTop = 5;
      const marginBottom = 5;
      const contentHeight = pdfHeight - marginTop - marginBottom;

      let positionY = 0;

      while (positionY < scaledHeight) {
        pdf.addImage(
          imageData,
          "PNG",
          0,
          marginTop - positionY,
          pdfWidth,
          scaledHeight
        );

        positionY += contentHeight;

        if (positionY < scaledHeight) {
          pdf.addPage();
        }
      }

      pdf.save("wynik-glosowania.pdf");
    } catch (error) {
      console.error("PDF generation error:", error);
    }
  };

  return { pdfRef, downloadPdf };
};

export default usePdfCreator;
