import React from "react";
import FormInput from "../InputField/InputField";

const LoginForm = ({ onChange, onSubmit, ...values }) => {
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Incorrect Email!!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "incorrect password!",
      label: "Password",
      required: true,
    },
  ];

  return (
    <div className="app">
      <form onSubmit={onSubmit} className="form-register">
        <h1 className="Register-Title">Login</h1>
        {inputs.map((inp) => (
          <FormInput
            key={inp.id}
            {...inp}
            value={values[inp.name]}
            onChangeHandler={onChange}
          />
        ))}
        <button className="Register-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
