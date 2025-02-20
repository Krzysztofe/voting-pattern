import React from "react";
import FormInputsWrapper from "./formInputsWrapper";
import ButtonSubmit from "@/components/buttonSubmit";
import { postVote } from "@/actions/postVote";
import InputsRadio from "@/components/inputs/inputsRadio";
import InputsText from "@/components/inputs/inputsText";

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

const FormToVote = () => {
  return (
    <form action={postVote} className="flex flex-col w-full mx-auto pb-16">
      <InputsRadio headerText="Kandydatury" inputsData={dataInputsCandidates} />
      <InputsText inputsData={dataInputsUser} />
      <ButtonSubmit />
    </form>
  );
};

export default FormToVote;
