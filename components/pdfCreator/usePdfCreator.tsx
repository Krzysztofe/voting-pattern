import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useRef } from "react";

const usePdfCreator = () => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const downloadPdf = async () => {
    const element = pdfRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 4,
        logging: true,
        backgroundColor: null,
      });
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
      const leftMargin = 40;
      const rightMargin = 40;
      const contentWidth = pdfWidth - leftMargin - rightMargin;

      let positionY = 0;

      while (positionY < scaledHeight) {
        pdf.addImage(
          imageData,
          "PNG",
          leftMargin,
          marginTop - positionY,
          contentWidth,
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
