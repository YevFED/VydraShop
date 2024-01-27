import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/SignUp/Signup";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/profile"></Route>
        <Route path="/profile/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
