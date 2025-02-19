import React from "react";
import FormInputsWrapper from "./formInputsWrapper";
import ButtonSubmit from "@/components/buttonSubmit";

const FormToVote = () => {
  return (
    <form className="flex flex-col w-full mx-auto">
      <FormInputsWrapper>
        <div className="text-lg text-accent font-bold">Kandydatury</div>
        <div className="form-control">
          <label className="cursor-pointer text-base flex items-center">
            <input
              type="radio"
              name="radio-10"
              className="radio-xs checked:bg-accent mr-2"
              defaultChecked
            />
            <span>Blanka Hasterok</span>
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer text-base flex items-center">
            <input
              type="radio"
              name="radio-10"
              className="radio-xs checked:bg-accent mr-2"
              defaultChecked
            />
            <span>Monika Koralewska</span>
          </label>
        </div>

        <div className="text-xs text-danger">error</div>
      </FormInputsWrapper>

      <FormInputsWrapper>
        <div>
          <label htmlFor="" className="text-lg text-accent font-bold block">
            Podaj numer identyfikacyjny
          </label>
          <input
            type="number"
            className="w-full max-w-xs border-b-2 border-gray-300 focus:border-accent focus:outline-none px-2 py-1"
            value="userName"
            placeholder="Nr"
            name="userName"
          />
          <div className="text-xs  text-danger">error</div>
        </div>
      </FormInputsWrapper>

     
      <ButtonSubmit />
    </form>
  );
};

export default FormToVote;
