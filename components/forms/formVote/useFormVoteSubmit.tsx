import { postVote } from "@/actions/postVote";
import { useRef, useState } from "react";
import { formVoteSchema } from "./formVoteSchema";
import { capitalizeWords } from "@/utils/capitalizeWords";

const useFormVoteSumbit = () => {
  const [errorMsg, setErrorMsg] = useState<Record<string, string>>({});
  const [isUserRegistered, setIsUserRegistered] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const newVotingValues = {
      candidateName: formData.get("candidateName")?.toString().trim(),
      userName: capitalizeWords(formData.get("userName")?.toString().trim()),
      userSurname: capitalizeWords(
        formData.get("userSurname")?.toString().trim()
      ),
    };

    const validationResult = formVoteSchema.safeParse(newVotingValues);

    if (!validationResult.success) {
      const errorMsg: Record<string, string> = {};

      validationResult.error.issues.forEach(issue => {
        errorMsg[issue.path[0]] = issue.message;
      });
      setErrorMsg(errorMsg);
      setIsUserRegistered("");
      return;
    }

    const resp = await postVote(validationResult.data);

    if (resp?.error) {
      setErrorMsg(resp?.error);
    }
    if (resp?.isRegistered) {
      setIsUserRegistered(resp?.isRegistered);
      setErrorMsg({});
    }

    if (resp?.message) {
      setResponseMessage(resp.message);
      setIsUserRegistered("");
      setErrorMsg({});
      formRef.current?.reset();
    }
  };

  return {
    errorMsg,
    isUserRegistered,
    responseMessage,
    setResponseMessage,
    formRef,
    clientAction,
  };
};

export default useFormVoteSumbit;
