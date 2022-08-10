import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Services from "./screens/Services";
import Contact from "./screens/Contact";
import ServiceDetails from "./screens/ServiceDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/vasave" element={<Home />} />
          <Route index path="/home" element={<Home />} />
          <Route index path="/" element={<Home />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/serviceDetails" element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
