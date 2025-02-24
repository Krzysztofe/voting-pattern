import { postVote } from "@/actions/postVote";
import { useRef, useState } from "react";
import { formVoteSchema } from "./formVoteSchema";


const useFormVoteSumbit = () => {
  const [errorMsg, setErrorMsg] = useState<Record<string, string>>({});
  const [isRegistered, setIsRegistered] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
 const formRef = useRef<HTMLFormElement>(null);


  const clientAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const newVotingValues = {
      candidateName: formData.get("candidateName")?.toString().trim(),
      userName: formData.get("userName")?.toString().trim(),
      userSurname: formData.get("userSurname")?.toString().trim(),
    };

    const validationResult = formVoteSchema.safeParse(newVotingValues);

    if (!validationResult.success) {
      const errorMsg: Record<string, string> = {};

      validationResult.error.issues.forEach(issue => {
        errorMsg[issue.path[0]] = issue.message;
      });
      setErrorMsg(errorMsg);
      setIsRegistered("");
      return;
    }

    const resp = await postVote(validationResult.data);

    if (resp?.error) {
      setErrorMsg(resp?.error);
    }
    if (resp?.isRegistered) {
      setIsRegistered(resp?.isRegistered);
      setErrorMsg({});
    }

    if (resp?.message) {
      setResponseMessage(resp.message);
      setIsRegistered("");
      setErrorMsg({});
      formRef.current?.reset();
    }
  };

  return { errorMsg, isRegistered, responseMessage,setResponseMessage, formRef,clientAction };
};

export default useFormVoteSumbit;
