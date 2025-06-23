import Header from "./componants/header/header";
import "./index.css";
import { Routes, Route } from "react-router";
import MainPage from "./pages/mainPage/mainpage";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./componants/footer/footer";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 500,
    });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
