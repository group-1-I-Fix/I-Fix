import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/RegistrationPage/Registration";
import Login from "./components/Regitration Page/LoginForm/LoginForm";
import Userprofile from "./pages/Home/UserProfile/Userprofile";
import { useState } from "react";
// import SwiperServices from "./components/SwiperServices/SwiperServices";

function App() {
  const [uiavatars, setUiAvatars] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  return (
    <div className="App">
      <Header setUiAvatars={setUiAvatars} setAvatarURL={setAvatarURL} uiavatars={uiavatars} avatarURL={avatarURL}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/user-profile" element={<Userprofile setUiAvatars={setUiAvatars} setAvatarURL={setAvatarURL} uiavatars={uiavatars} avatarURL={avatarURL}/>} />
      </Routes>
      <Footer />
      {/*<SwiperServices />*/}
    </div>
  );
}

export default App;
