import React from "react";
import Header from "./components/Head/Header";
import Features from "./components/Features/Features";
import Home from "./components/Hero/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Research from "./components/Research/Research";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Research />
      <Contact />
      <Footer />
    </>
  )
}

export default App
