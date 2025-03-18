// import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Certification from "./components/Certification";

function App() {
  return (
    <div className="whole-page">
      <Navbar />
      <main>
        <About/>
        <Projects/>
        <Certification/>
      </main>
      <Footer />
    </div>
  );
}

export default App;