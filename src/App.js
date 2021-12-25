import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
// import SwiperServices from "./components/SwiperServices/SwiperServices";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      {/*<SwiperServices />*/}
    </div>
  );
}

export default App;
