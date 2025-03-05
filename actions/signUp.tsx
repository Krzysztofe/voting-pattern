import { authClient } from "@/lib/auth-client";


export const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  //   const router = useRouter();
  const payload = {
    email: "test@example.com",
    password: "password1234",
  };

  if (!payload.email || !payload.password) {
    console.error("Misssing", payload);
    return;
  }

  try {
    const { data, error } = await authClient.signIn.email(payload, {
      onRequest: ctx => console.log("Request sent", ctx),
      onSuccess: ctx => {
        // router.push("/login/admin"),
        console.log("Success!", ctx);
      },
      onError: ctx => console.error("Error", ctx),
    });

    if (error) {
      console.error("Sign-up failed:", error);
    } else {
      console.log("Sign-up successful:", data);
    }
  } catch (error) {
    console.error("Error during sign-up:", error);
  }
};
