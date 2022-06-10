import React from "react";
import Header from "./components/Head/Header";
import Home from "./components/Hero/Home";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Error from "./components/Error/Error";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer />
      {/* Particles */}
    </>
  )
}

export default App
