import { useState } from "react";
import Register from "../../components/Regitration Page/RegisterForm/RegisterForm";
import Login from "../../components/Regitration Page/LoginForm/LoginForm";
import "./Registration.css";

const Registration = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    registered: false,
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  let { firstName, lastName, email, password, confirmPassword } = values;

  const users_data = [];

  const onSubmitRegister = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword)
      return;

    const user_data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      registered: true,
      appointments: [],
    };

    users_data.push(user_data);

    let flag = false;

    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(users_data));
    } else {
      let data = JSON.parse(localStorage.getItem("users"));
      data.forEach((item) => {
        if (user_data.email === item.email) {
          flag = true;
          alert("Email already Registered!");
          return;
        }
      });

      if (!flag) {
        data.push(user_data);
        localStorage.setItem("users", JSON.stringify(data));
        //Router Here >>>>
      }
    }
    event.target.reset();
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();

    if (!localStorage.getItem("users") || !email || !password) return;

    let all_users_From_Local = JSON.parse(localStorage.getItem("users"));

    all_users_From_Local.forEach((acc) => {
      if (email === acc.email && password === acc.password)
        localStorage.setItem("loggedUser", JSON.stringify(acc));
      else if (email === acc.email && password !== acc.password)
        alert("incorrect Password!");
      else alert("Please Create an account!");
    });
    event.target.reset();
  };

  return (
    <div className="holder-froms">
      <Register onSubmit={onSubmitRegister} onChange={onChange} />
      <Login onSubmit={onSubmitLogin} onChange={onChange} />
    </div>
  );
};

export default Registration;
