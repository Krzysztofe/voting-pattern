"use client";

import ButtonSubmit from "@/components/buttons/buttonSubmit";
import InputsRadio from "@/components/inputs/inputsRadio";
import InputsText from "@/components/inputs/inputsText";
import RequestMessage from "./requestMessage";
import useFormVoteSubmit from "./useFormVoteSubmit";

const dataInputsCandidates = [
  { value: "Blanka Hasterok", name: "candidateName" },
  { value: "Monika Kowalewska", name: "candidateName" },
];

const dataInputsUser = [
  { label: "Podaj swoje pierwsze imię", name: "userName", placeholder: "Imię" },
  {
    label: "Podaj swoje nazwisko",
    name: "userSurname",
    placeholder: "Nazwisko",
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
      <div className="text-xs text-danger h-4 w-[50%] mx-auto">
        {isUserRegistered}
      </div>
      <ButtonSubmit text="Zagłosuj" />
      {responseMessage && (
        <RequestMessage
          message={responseMessage}
          setMessage={setResponseMessage}
        />
      )}
    </form>
  );
};

export default FormVoteSubmition;
