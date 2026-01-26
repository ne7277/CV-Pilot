import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./HomePage.css";

const HomePage = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <>
      {/* ONE GLOBAL MOUSE GLOW */}
      <div ref={glowRef} className="mouse-glow" />

      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default HomePage;
