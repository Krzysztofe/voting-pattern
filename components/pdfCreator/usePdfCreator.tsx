// import html2canvas from "html2canvas-pro";
// import jsPDF from "jspdf";
// import { useRef } from "react";

// const usePdfCreator = () => {
//   const pdfRef = useRef<HTMLDivElement>(null);

//   const download = async () => {
//     const element = pdfRef.current;
//     if (!element) return;

//     try {
//       const canvas = await html2canvas(element, { scale: 4 });
//       const data = canvas.toDataURL("image/png");

//       const pdf = new jsPDF({
//         orientation: "portrait",
//         unit: "px",
//         format: "a4",
//       });
//       const imgProperties = pdf.getImageProperties(data);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

//       pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("wynik-głosowania.pdf");
//     } catch (error) {
//       console.log("pdf error", error);
//     }
//   };

//   return { pdfRef, download };
// };

// export default usePdfCreator;

import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useRef } from "react";

const usePdfCreator = () => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const download = async () => {
    const element = pdfRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, { scale: 4 }); // Adjust scale for better quality
      const imageData = canvas.toDataURL("image/png");

      // Create PDF with A4 page size
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4", // A4: 595.28 x 841.89 px
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Scale image height to fit PDF width
      const scaledHeight = (imgHeight * pdfWidth) / imgWidth;

      // Define margins
      const marginTop = 40; // Space at the top of each page
      const marginBottom = 40; // Space at the bottom of each page
      const contentHeight = pdfHeight - marginTop - marginBottom; // Available space for content

      let positionY = 0; // Vertical position tracker

      // Loop through content and add pages
      while (positionY < scaledHeight) {
        // Add content slice with margins
        pdf.addImage(
          imageData,
          "PNG",
          0,
          marginTop - positionY, // Adjust for the current position
          pdfWidth,
          scaledHeight
        );

        positionY += contentHeight; // Move to the next slice

        // Add a new page if more content remains
        if (positionY < scaledHeight) {
          pdf.addPage();
        }
      }

      pdf.save("wynik-glosowania.pdf");
    } catch (error) {
      console.error("PDF generation error:", error);
    }
  };

  return { pdfRef, download };
};

export default usePdfCreator;
