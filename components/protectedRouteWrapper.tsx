import React, { ReactNode } from "react";
import { isAdminLogged } from "@/utils/isAdminLogged";

type Props = {
  children: ReactNode;
};

const ProtectedRouteWrapper = async (props: Props) => {
  await isAdminLogged();

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default ProtectedRouteWrapper;
