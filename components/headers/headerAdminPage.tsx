import PdfContentWrapper from "../pdfCreator/pdfContentWrapper";
import TableResults from "../tableResults/tableResults";

const HeaderAdminPage = () => {
  return (
    <header className="relative py-5 text-lg border-b-8 border-bacground font-bold flex">
      <div className="mx-auto text-xl">Wynik</div>

      <PdfContentWrapper>
        <TableResults />
      </PdfContentWrapper>
    </header>
  );
};

export default HeaderAdminPage;
