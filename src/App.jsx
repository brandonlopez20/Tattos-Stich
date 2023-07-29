import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Head from "./components/Head";
import CarouselComponent from "./components/CarouselComponent";
import Content from "./components/Content";

// Componente que se mostrará cuando se alcance el nivel de scroll deseado
const ComponentToLoad = () => {
  return <Content />;
};

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      console.log("Scroll position:", currentPosition);
    };

    // Agregar el event listener para el evento 'scroll' cuando el componente se monta
    window.addEventListener("scroll", handleScroll);

    // Eliminar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Valor del nivel de scroll en el que queremos cargar el componente
  const scrollThreshold = 124;

  return (
    <>
      <Header />
      <Head />
      <CarouselComponent />
      {scrollPosition > scrollThreshold && <ComponentToLoad />}
    </>
  );
};

export default App;
