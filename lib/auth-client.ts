import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "http://localhost:8080",
  // baseURL: "http://vps-2c27257b.vps.ovh.ca:8080",
});
