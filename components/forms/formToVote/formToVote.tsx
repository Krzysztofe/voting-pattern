import React from "react";

const FormToVote = () => {
  return (
    <form className="mx-auto flex flex-col gap-3">
      <div className="">
        <div className="text-lg text-accent">Kandydatury</div>
        <div className="form-control">
          <label className="label cursor-pointer text-base">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              defaultChecked
            />
            <span>Blanka Hasterok</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer text-base">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              defaultChecked
            />
            <span>Monika Koralewska</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer text-base">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              defaultChecked
            />
            <span>Maria Malinowska</span>
          </label>
        </div>
        <div className="text-xs text-danger">error</div>
      </div>

      <div className="">
        <label htmlFor="" className="text-lg  text-accent">
          Podaj numer identyfikacyjny
        </label>
        <input
          type="number"
          className="input input-bordered border-4 border-indigo-500  input-md w-full max-w-xs px-2"
          value="userName"
          placeholder="Nr"
          name="userName"
        />
        <div className="text-xs  text-danger">error</div>
      </div>

      <button className="bg-accent text-white px-2 block ml-auto">
        Zagłosuj
      </button>
    </form>
  );
};

export default FormToVote;
