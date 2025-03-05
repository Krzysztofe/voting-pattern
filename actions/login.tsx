import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export const login = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const payload = {
    email: "test@example.com",
    password: "password1234",
    callbackURL: "/login/admin",
  };

  if (!payload.email || !payload.password) {
    console.error("❌ Missing required fields:", payload);
    return;
  }

  try {
    // Perform the login request
    const { data, error } = await authClient.signIn.email(payload, {
      onRequest: ctx => console.log("? Request sent", ctx),
      onSuccess: ctx => {
        console.log("✅ Success!");
      },
      onError: ctx => console.error("❌ Error occurred", ctx),
    });

    if (error) {
      console.error("Sign-in failed:", error);
    } else {
      console.log("Sign-in successful:");

      // Redirect only in the server-side action
      //   redirect("/login/admin"); // This should now work
    }
  } catch (error) {
    console.error("Unexpected error during sign-in:", error);
  }
};
