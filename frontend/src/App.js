import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef } from "react";
import Navbar from "./mains/navbar";
import Footer from "./mains/footer";
import Home from "./pages/home";
import Store from "./pages/store";
import Copyright from "./components/copyright";
import Cartpage from "./pages/cart";
import { ShopContextProvider } from "./shop-context";
import "@stripe/stripe-js";
import Success from "./pages/success";
import Cancel from "./pages/cancel";

function App() {
  return (
    <div className="App  flex flex-col min-h-screen ">
      <ShopContextProvider>
        <Router className="flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="shoppingcart" element={<Cartpage />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
          <Copyright />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
