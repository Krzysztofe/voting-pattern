"use client";

import ButtonSubmit from "@/components/buttonSubmit";
import { postVote } from "@/actions/postVote";
import InputsRadio from "@/components/inputs/inputsRadio";
import InputsText from "@/components/inputs/inputsText";
import { useActionState } from "react";

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
  const [state, formAction] = useActionState(postVote, { message: "" }); 

  console.log('',state)


  const clientAction = async (formData: FormData) => {};

  return (
    <form action={formAction} className="flex flex-col w-full mx-auto pb-16">
      
      <InputsRadio headerText="Kandydatury" inputsData={dataInputsCandidates} />
      {state?.message && <p className="text-red-500">{state.message}</p>}{" "}
      <InputsText inputsData={dataInputsUser} />
      <ButtonSubmit />
    </form>
  );
};

export default FormVoteSubmition;
