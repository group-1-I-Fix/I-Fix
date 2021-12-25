import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/RegistrationPage/Registration";
import Userprofile from "./pages/Home/UserProfile/Userprofile";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import Services from "./components/Services.components/Services";

// import SwiperServices from "./components/SwiperServices/SwiperServices";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/user-profile" element={<Userprofile />} />
        <Route exact path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
      {/*<SwiperServices />*/}
    </div>
  );
}

export default App;
