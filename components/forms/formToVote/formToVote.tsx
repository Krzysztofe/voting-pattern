import React from "react";

const FormToVote = () => {
  return (
    <form className="mx-auto flex flex-col gap-3">
      <div>
        <div className="text-lg">Kandydatury</div>
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
        <div>error</div>
      </div>
      <div className="">
        <label htmlFor="" className="label">
          Podaj numer identyfikacyjny
        </label>
        <input
          type="number"
          className="input input-bordered border-4 border-indigo-500  input-md w-full max-w-xs px-2"
          value="userName"
          placeholder="Nr"
          name="userName"
        />
        <div>error</div>
      </div>

      <button className="bg-slate-600 text-white px-2 block ml-auto">
        Zagłosuj
      </button>
    </form>
  );
};

export default FormToVote;
