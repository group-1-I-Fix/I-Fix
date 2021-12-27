import "./App.css";
import Footer from "./components/Footer/Footer";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import DetailedService from "./components/detailed-service/detailed-service";
import services from "./components/Services.components/services.data";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/RegistrationPage/Registration";
import Userprofile from "./pages/Home/UserProfile/Userprofile";
import { useState } from "react";
import OurTeam from "../src/components/OurTeam/OurTeam";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [uiavatars, setUiAvatars] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  return (
    <div className="App">
      <Header
        setUiAvatars={setUiAvatars}
        setAvatarURL={setAvatarURL}
        uiavatars={uiavatars}
        avatarURL={avatarURL}
      />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Registration />} />
        <Route
          exact
          path="/user-profile"
          element={
            <Userprofile
              setUiAvatars={setUiAvatars}
              setAvatarURL={setAvatarURL}
              uiavatars={uiavatars}
              avatarURL={avatarURL}
            />
          }
        />
        <Route exact path="/services" element={<ServicesPage />} />
        <Route
          exact
          path="/services/:title"
          element={<DetailedService services={services} />}
        />
        <Route exact path="/aboutUs" element={<OurTeam />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
