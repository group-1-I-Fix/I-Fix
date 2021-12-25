import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ServicesPage from "./components/ServicesPage/ServicesPage";

// import SwiperServices from "./components/SwiperServices/SwiperServices";

function App() {
    return (
        // <div className="App">
        //     <Header/>
        //     <Home/>
        //     <Footer/>
        //     {/*<SwiperServices />*/}
        // </div>
        <>
            <Header />
            <ServicesPage />
            <Footer />
        </>


    );
}

export default App;
