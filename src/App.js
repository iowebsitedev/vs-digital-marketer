import { Routes, Route } from "react-router-dom";
import "./styles/font-size-class_link.css";
import "./styles/general.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import HomePage from "./HomePage";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
