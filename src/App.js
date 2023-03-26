import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./mains/navbar";
import Footer from "./mains/footer";
import Home from "./pages/home";

function App() {
  return (
    <div className="App  flex flex-col ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
