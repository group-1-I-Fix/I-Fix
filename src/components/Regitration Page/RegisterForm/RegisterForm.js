import FormInput from "../InputField/InputField";
import "./RegisterForm.css";

const RegisterForm = ({ onSubmit, onChange, ...values }) => {
  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name Should be 3-16 characters & shouldn't include an special Character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name Should be 3-16 characters & shouldn't include an special Character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It Should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters, & include at least 1 letter, 1 number and 1 speccial character! ",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  return (
    <div className="app">
      <form onSubmit={onSubmit} className="form-register">
        <h1 className="Register-Title">Register</h1>
        {inputs.map((inp) => (
          <FormInput
            key={inp.id}
            {...inp}
            value={values[inp.name]}
            onChangeHandler={onChange}
          />
        ))}

        <button className="Register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
