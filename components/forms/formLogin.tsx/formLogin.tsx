import ButtonSubmit from "@/components/buttons/buttonSubmit";
import InputsText from "@/components/inputs/inputsText";


const dataInputsLogin = [
  { label: "Login", name: "userLogin", placeholder: "Login" },
  {
    label: "Hasło",
    name: "userPassword",
    placeholder: "Hasło",
  },
];

const FormLogin = () => {


  return (
    <form className="flex flex-col w-full mx-auto pb-16">
      <InputsText
        inputsData={dataInputsLogin}
        errorMsg={{
          userName: "www",
          userSurname: "wwwwee",
        }}
      />
      <ButtonSubmit text="Zaloguj" />
    </form>
  );
};

export default FormLogin;
