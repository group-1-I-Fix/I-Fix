import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom'
import RegisterForm from './components/Regitration Page/RegisterForm/RegisterForm'
import Login from './components/Regitration Page/LoginForm/LoginForm'
import Userprofile from "./pages/Home/UserProfile/Userprofile";
// import SwiperServices from "./components/SwiperServices/SwiperServices";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<LoginForm />} />
                <Route exact path="/register" element={<RegisterForm />} />
                <Route exact path="/user-profile" element={<Userprofile />} />
            </Routes>
            <Footer />
            {/*<SwiperServices />*/}
        </div>
    );
}

export default App;
