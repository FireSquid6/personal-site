import "./Hero.css";
import { things, Thing } from "./things";
import { useState, useEffect } from "react";


export default function Hero() {
  const [thingStack, setThingStack] = useState<Thing[]>([...things]);

  const handleOnMouseEnter = () => {

  };


  return (
    <>
      <div className="hero">
        <h1>I like <span onMouseEnter={handleOnMouseEnter} className="special-text">{thingStack[0].name}</span></h1>
      </div>
      <div>
        
      </div>
    </>
  );
}