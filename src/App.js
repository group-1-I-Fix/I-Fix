import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Userprofile from "./pages/Home/UserProfile/Userprofile";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Userprofile />
      <Footer />
    </div>
  );
}

export default App;
