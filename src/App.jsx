// import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SaladPage from "./components/SaladPage";
import CakePage from "./components/CakePage";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <SaladPage />
      <CakePage />
    </div>
  );
}
