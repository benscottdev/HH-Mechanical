import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Reviews from "./Pages/Reviews";
import Services from "./Pages/Services";
import BookNow from "./Pages/BookNow";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  function handleActive() {
    setActive(!active);
  }

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={<Home handleActive={handleActive} active={active} />}
      />
      <Route
        path="/reviews"
        element={<Reviews handleActive={handleActive} active={active} />}
      />
      <Route
        path="/services"
        element={<Services handleActive={handleActive} active={active} />}
      />
      <Route
        path="/booknow"
        element={<BookNow handleActive={handleActive} active={active} />}
      />
    </Routes>
  );
}
export default App;
