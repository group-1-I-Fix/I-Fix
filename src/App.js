import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Registration from "./pages/RegistrationPage/Registration";
import Userprofile from "./pages/Home/UserProfile/Userprofile";
import {Routes, Route} from "react-router-dom"
import ReservationForm from "./components/reservation-form/reservation-form";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Userprofile /> */}
      {/* <Footer /> */}
      {/* <Registration /> */}
      <ReservationForm />
    </div>
  );
}

export default App;
