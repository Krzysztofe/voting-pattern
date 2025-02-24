"use client";

import ButtonSubmit from "@/components/buttonSubmit";
import { postVote } from "@/actions/postVote";
import InputsRadio from "@/components/inputs/inputsRadio";
import InputsText from "@/components/inputs/inputsText";
import { formVoteSchema } from "./formVoteSchema";
import { useEffect, useRef, useState } from "react";

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
  const [errorMsg, setErrorMsg] = useState<Record<string, string>>({});
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // await new Promise(resolve => {
    //   setTimeout(resolve, 5000);
    // });

   const formData = new FormData(formRef.current);

    const newVotingValues = {
      candidateName: formData.get("candidateName")?.toString().trim(),
      userName: formData.get("userName")?.toString().trim(),
      userSurname: formData.get("userSurname")?.toString().trim(),
    };

    const validationResult = formVoteSchema.safeParse(newVotingValues);

    if (!validationResult.success) {
      let errorMsg: Record<string, string> = {};

      validationResult.error.issues.forEach(issue => {
        errorMsg[issue.path[0]] = issue.message;
      });
      setErrorMsg(errorMsg);
      return;
    }

    const resp = await postVote(validationResult.data);

    if (resp?.error) {
      setErrorMsg(resp?.error);
    }
    if (resp?.message) {
      setResponseMessage(resp.message);
      setErrorMsg({});
      formRef.current?.reset();
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setResponseMessage("");
    }, 3000);

    () => {
      return clearTimeout(timeoutId);
    };
  }, [responseMessage]);

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
      />
      <InputsText
        inputsData={dataInputsUser}
        errorMsg={{
          userName: errorMsg.userName,
          userSurname: errorMsg.userSurname,
        }}
      />
      <div className="text-xs h-6"> {responseMessage}</div>
      <ButtonSubmit />
    </form>
  );
};

export default FormVoteSubmition;
