import "./App.css";
import Feature1 from "./mains/feature1";
import Features from "./mains/features";
import Hero from "./mains/hero";
import Navbar from "./mains/navbar";
import Topsellers from "./mains/topsellers";

function App() {
  return (
    <div className="App  flex flex-col ">
      <Navbar />
      <Hero />
      <Features />
      <Feature1 />
      <Topsellers />
    </div>
  );
}

export default App;
