import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ProjectBlock from "./components/Project/ProjectBlock.jsx";

import newsExplorer from "./assets/images/news_explorer.png";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8 px-4">
      <Header />
      <div className="w-full max-w-7xl mx-auto">
        <Hero />
        <section className="text-white ">
          <p>01 · Selected work</p>
          <h2>RECENT PROJECTS</h2>
        </section>
        <div className="grid grid-cols-3 gap-6">
          <ProjectBlock
            number="01"
            img={newsExplorer}
            technologies="React + Vite"
            title="News Explorer"
            paragraph="Aplicación web para explorar noticias, guardar artículos favoritos y gestionar tu contenido personalizado. Desarrollada con React y Vite, integra la API de noticias de terceros (News API) para obtener información actualizada y utiliza mockapi.io para la autenticación y persistencia de datos."
            year="2026"
          />
          <ProjectBlock
            number="01"
            img={newsExplorer}
            technologies="React + Vite"
            title="News Explorer"
            paragraph="Aplicación web para explorar noticias, guardar artículos favoritos y gestionar tu contenido personalizado. Desarrollada con React y Vite, integra la API de noticias de terceros (News API) para obtener información actualizada y utiliza mockapi.io para la autenticación y persistencia de datos."
            year="2026"
          />
          <ProjectBlock
            number="01"
            img={newsExplorer}
            technologies="React + Vite"
            title="News Explorer"
            paragraph="Aplicación web para explorar noticias, guardar artículos favoritos y gestionar tu contenido personalizado. Desarrollada con React y Vite, integra la API de noticias de terceros (News API) para obtener información actualizada y utiliza mockapi.io para la autenticación y persistencia de datos."
            year="2026"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
