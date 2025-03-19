"use client";
import { useLogin } from "@/actions/auth/login";
import ButtonSubmit from "@/components/buttons/buttonSubmit";
import InputsText from "@/components/inputs/inputsText";
import RequestMessage from "../formVote/formRequestMessage";
import AdditionalErrors from "../additionalErrors";

const dataInputsLogin = [
  {
    label: "Email",
    name: "userEmail",
    placeholder: "Email",
    type: "email",
    defaultValue: "test@example.com",
  },
  {
    label: "Hasło",
    name: "userPassword",
    placeholder: "Hasło",
    type: "password",
    defaultValue: "password1234",
  },
];

const FormLogin = () => {
  const {
    loginAction,
    loginError,
    isLoading,
    requestError,
    setRequestError,
    formRef,
  } = useLogin();

  return (
    <form
      onSubmit={loginAction}
      ref={formRef}
      className="flex flex-col w-full mx-auto pb-16"
    >
      <InputsText inputsData={dataInputsLogin} />

      <AdditionalErrors text={loginError} />

      <ButtonSubmit
        text="Zaloguj"
        bacground="bg-accent"
        textColor="text-white"
        loading={isLoading}
      />
      {requestError && (
        <RequestMessage message={requestError} setMessage={setRequestError} />
      )}
    </form>
  );
};

export default FormLogin;
