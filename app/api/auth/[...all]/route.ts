import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";



export const { POST, GET } = toNextJsHandler(auth);
console.log("Incoming request to sign-up endpoint");