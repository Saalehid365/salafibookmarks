import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./mains/navbar";
import Home from "./pages/home";
import Store from "./pages/store";
import Cartpage from "./pages/cart";
import { ShopContextProvider } from "./shop-context";
import Success from "./pages/success";
import Cancel from "./pages/cancel";
import Contact from "./pages/contact";
import Banner from "./mains/banner";
import About from "./pages/about";

function App() {
  return (
    <div className="App  flex flex-col min-h-screen ">
      <ShopContextProvider>
        <Router className="flex flex-col">
          <Banner />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="shoppingcart" element={<Cartpage />} />

            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
