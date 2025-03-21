"use client";

import ButtonSubmit from "@/components/buttons/buttonSubmit";
import InputsRadio from "@/components/inputs/inputsRadio";
import InputsText from "@/components/inputs/inputsText";
import FormRequestMessage from "./formRequestMessage";
import useFormVoteSubmit from "./useFormVoteSubmit";
import AdditionalErrors from "../additionalErrors";
import { FormVoteSchemaModel } from "@/components/forms/formVote/useFormVoteSubmit";

const dataInputsCandidates: {
  value: string;
  name: keyof FormVoteSchemaModel;
}[] = [
  { value: "Blanka Hasterok", name: "candidateName" },
  { value: "Monika Kowalewska", name: "candidateName" },
];

const dataInputsUser: {
  label: string;
  name: keyof FormVoteSchemaModel;
  placeholder: string;
  type: string;
}[] = [
  {
    label: "Podaj swoje pierwsze imię",
    name: "userName",
    placeholder: "Imię",
    type: "text",
  },
  {
    label: "Podaj swoje nazwisko",
    name: "userSurname",
    placeholder: "Nazwisko",
    type: "text",
  },
];

const FormVoteSubmition = () => {
  const {
    isUserRegistered,
    responseMessage,
    setResponseMessage,
    handleVoteSubmit,
    register,
    handleSubmit,
    errorMsg,
    isSubmitting,
  } = useFormVoteSubmit();

  return (
    <form
      onSubmit={handleSubmit(handleVoteSubmit)}
      className="flex flex-col w-full mx-auto pb-16"
    >
      <InputsRadio
        headerText="Kandydatury"
        inputsData={dataInputsCandidates}
        errorMsg={errorMsg.candidateName || ""}
        register={register}
      />
      <InputsText
        inputsData={dataInputsUser}
        errorMsg={errorMsg}
        register={register}
      />
      <AdditionalErrors text={isUserRegistered} />

      <ButtonSubmit
        text="Zagłosuj"
        bacground="bg-accent"
        textColor="text-white"
        loading={isSubmitting}
      />
      {responseMessage && (
        <FormRequestMessage
          message={responseMessage}
          setMessage={setResponseMessage}
        />
      )}
    </form>
  );
};

export default FormVoteSubmition;
