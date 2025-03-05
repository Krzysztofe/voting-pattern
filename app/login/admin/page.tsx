import HeaderAdminPage from "@/components/headers/headerAdminPage";
import TableResults from "@/components/tables/tableResults/tableResults";
import React from "react";
import { Suspense } from "react";
import PdfContentWrapper from "@/components/pdfCreator/pdfContentWrapper";
import TableVotingList from "@/components/tables/tableVotingList/tableVotingList";
import LoadingComponent from "@/components/loadingComponent";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProtectedRouteWrapper from "@/components/protectedRouteWrapper";

const PageAdmin = async () => {
  const logOut = async () => {
    "use server";
    await auth.api.signOut({ headers: await headers() });
    redirect("/login");
  };

  return (
    <ProtectedRouteWrapper>
      <HeaderAdminPage />
      <form action={logOut}>
        <button>wyloguj</button>
      </form>

      <Suspense
        fallback={<LoadingComponent color="accent" size="loading-lg" />}
      >
        <PdfContentWrapper>
          <TableResults />
          <TableVotingList />
        </PdfContentWrapper>
        <TableResults />
        <TableVotingList />
      </Suspense>
    </ProtectedRouteWrapper>
  );
};

export default PageAdmin;
