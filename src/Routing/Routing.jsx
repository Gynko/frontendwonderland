import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderMobile from "../components/HeaderMobile/HeaderMobile.jsx";
import CSFlexbox from "../pages/CheatSheets/Flexbox/CSFlexbox.jsx";
import Home from "../pages/Home/Home.jsx";
import Topics from "../pages/Topics/Topics.jsx";
import HeaderDesktop from "../components/HeaderDesktop/HeaderDesktop.jsx";
import Contact from "../pages/Contact/Contact.jsx";

function Routing() {
  return (
    <BrowserRouter>
      <HeaderMobile />
      <HeaderDesktop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/cheatsheets/flexbox" element={<CSFlexbox />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
