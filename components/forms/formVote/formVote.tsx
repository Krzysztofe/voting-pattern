"use client";

import ButtonSubmit from "@/components/buttons/buttonSubmit";
import InputsRadio from "@/components/inputs/inputsRadio";
import InputsText from "@/components/inputs/inputsText";
import FormRequestMessage from "./formRequestMessage";
import useFormVoteSubmit from "./useFormVoteSubmit";
import AdditionalErrors from "../additionalErrors";

const dataInputsCandidates = [
  { value: "Blanka Hasterok", name: "candidateName" },
  { value: "Monika Kowalewska", name: "candidateName" },
];

const dataInputsUser = [
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
    errorMsg,
    isUserRegistered,
    responseMessage,
    setResponseMessage,
    formRef,
    clientAction,
    handleChange,
  } = useFormVoteSubmit();

  return (
    <form
      onSubmit={clientAction}
      ref={formRef}
      className="flex flex-col w-full mx-auto pb-16"
    >
      <InputsRadio
        headerText="Kandydatury"
        inputsData={dataInputsCandidates}
        errorMsg={errorMsg.candidateName}
        handleChange={handleChange}
      />
      <InputsText
        inputsData={dataInputsUser}
        errorMsg={errorMsg}
        handleChange={handleChange}
      />
      <AdditionalErrors text={isUserRegistered} />

      <ButtonSubmit
        text="Zagłosuj"
        bacground="bg-accent"
        textColor="text-white"
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
