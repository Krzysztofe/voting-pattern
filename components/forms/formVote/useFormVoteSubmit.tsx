import { postVote } from "@/actions/postVote";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { z } from "zod";
import { formVoteSchema } from "./formVoteSchema";

export type FormVoteSchemaModel = z.infer<typeof formVoteSchema>;

type ErrorsModel = {
  candidateName: string;
  userName: string;
  userSurname: string;
};

const transformHookErrors = (
  errors: FieldErrors<ErrorsModel>
): Partial<Record<keyof ErrorsModel, string>> => {
  return Object.keys(errors).reduce((acc, key) => {
    const errorKey = key as keyof ErrorsModel;
    if (errors[errorKey]?.message) {
      acc[errorKey] = errors[errorKey]?.message as string;
    }
    return acc;
  }, {} as Partial<Record<keyof ErrorsModel, string>>);
};

const useFormVoteSubmit = () => {
  const [errorMsg, setErrorMsg] = useState<Record<string, string>>({});
  const [isUserRegistered, setIsUserRegistered] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormVoteSchemaModel>({ resolver: zodResolver(formVoteSchema) });

  useEffect(() => {
    const transformed = transformHookErrors(errors);
    setErrorMsg(transformed);
  }, [Object.keys(errors).length]);

  const handleVoteSubmit = async (data: FormVoteSchemaModel) => {
    const resp = await postVote(data);
console.log('',data)
    if (resp?.error) {
      setErrorMsg(resp.error);
      setIsUserRegistered("");
    }
    if (resp?.isRegistered) {
      setIsUserRegistered(resp.isRegistered);
      setErrorMsg({});
    }

    if (resp?.message) {
      setResponseMessage(resp.message);
      setIsUserRegistered("");
      setErrorMsg({});
      reset();
    }
  };

  return {
    errorMsg,
    isUserRegistered,
    responseMessage,
    setResponseMessage,
    handleVoteSubmit,
    register,
    handleSubmit,
    isSubmitting,
  };
};

export default useFormVoteSubmit;
