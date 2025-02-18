import React from "react";

const FormToVote = () => {
  return (
    <form>
      <div className="">
        <label htmlFor="" className="label">
          Podaj numer identyfikacyjny
        </label>
        <input
          type="number"
          className="input input-bordered border-4 border-indigo-500  input-md w-full max-w-xs"
          value="userName"
          placeholder="Imię"
          name="userName"
        />
      </div>

      <div>Kandydatury</div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            defaultChecked
          />
          <span className="label-text">Blanka Hasterok</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            defaultChecked
          />
          <span className="label-text">Monika Koralewska</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            defaultChecked
          />
          <span className="label-text">Maria Malinowska</span>
        </label>
      </div>
      <button className="bg-slate-600 text-white px-2 block ml-auto">
        Zagłosuj
      </button>
    </form>
  );
};

export default FormToVote;
