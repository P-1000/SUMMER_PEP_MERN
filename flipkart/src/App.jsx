import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Categories from "./Components/Categories";
import Carousel from "./Components/Carousel";
import BestOfEl from "./Components/BestOfEl";
import ScorllCards from "./Components/ScrollCards";
import Grid from "./Components/Grid";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Nav />
        <Categories />
        <Carousel />
        <BestOfEl />
        <ScorllCards />
        <ScorllCards />
        <Grid/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
