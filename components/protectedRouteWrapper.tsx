import React, { ReactNode } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isAdminLogged } from "@/utils/isAdminLogged";

type Props = {
  children: ReactNode;
};

const ProtectedRouteWrapper = async (props: Props) => {
  await isAdminLogged();

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default ProtectedRouteWrapper;
