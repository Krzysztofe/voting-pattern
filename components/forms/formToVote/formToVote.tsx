import React from "react";
import FormInputsWrapper from "./formInputsWrapper";
import ButtonSubmit from "@/components/buttonSubmit";
import { postVote } from "@/actions/postVote";

const FormToVote = () => {
  return (
    <form action={postVote} className="flex flex-col w-full mx-auto pb-16">
      <FormInputsWrapper>
        <div className="text-lg text-accent">Kandydatury</div>
        <div className="form-control">
          <label className="cursor-pointer text-base flex items-center">
            <input
              type="radio"
              value="Blanka Hasterok"
              name="candidateName"
              className="radio-xs checked:bg-accent mr-2"
              // defaultChecked
            />
            <span>Blanka Hasterok</span>
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer text-base flex items-center">
            <input
              type="radio"
              value="Monika Koralewska"
              name="candidateName"
              className="radio-xs checked:bg-accent mr-2"
              // defaultChecked
            />
            <span>Monika Koralewska</span>
          </label>
        </div>

        <div className="text-xs text-danger">error</div>
      </FormInputsWrapper>

      <FormInputsWrapper>
        <div>
          <label htmlFor="" className="text-lg text-accent block">
            Podaj swoje pierwsze imię
          </label>
          <input
            type="text"
            className="w-full max-w-xs border-b-2 border-gray-300 focus:border-accent focus:outline-none px-2 py-1"
            placeholder="Imię"
            name="userName"
          />
          <div className="text-xs  text-danger">error</div>
        </div>
      </FormInputsWrapper>
      <FormInputsWrapper>
        <div>
          <label htmlFor="" className="text-lg text-accent block">
            Podaj swoje nazwisko
          </label>
          <input
            type="text"
            className="w-full max-w-xs border-b-2 border-gray-300 focus:border-accent focus:outline-none px-2 py-1"
            placeholder="Nazwisko"
            name="userSurname"
          />
          <div className="text-xs  text-danger">error</div>
        </div>
      </FormInputsWrapper>

      <ButtonSubmit />
    </form>
  );
};

export default FormToVote;
