import { ReactNode } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  children: ReactNode;
};

const ProtectedRouteWrapper = async (props: Props) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return <div>{props.children}</div>;
};

export default ProtectedRouteWrapper;
