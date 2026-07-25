import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Project from "./components/Project/Project.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8 px-4">
      <Header />
      <Hero />
      <div className="w-full max-w-7xl mx-auto mt-25">
        <div className="text-white ">
          <p>01 · Selected work</p>
          <h2>RECENT PROJECTS</h2>
        </div>
        <Project />
      </div>

      <Footer />
    </div>
  );
}

export default App;
