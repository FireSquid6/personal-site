import "./Hero.css";
import { things, Thing } from "./things";
import { useState, useEffect, MouseEventHandler } from "react";


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


function shuffle(array: any[]): any[] {
  let newArray = [...array];
  let currentIndex = newArray.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }

  return newArray;
}


export default function Hero(): JSX.Element {
  const delay: number = 5;
  const [thingStack, setThingStack] = useState<Thing[]>(shuffle(things) as Thing[]);
  const [currentThing, setCurrentThing] = useState<Thing>(thingStack[0]);
  const [animating, setAnimating] = useState<boolean>(false);
  const [amimationText, setAnimationText] = useState<string>("");

  const startAnimation = (nextText: string) => {
    const textLength = nextText.length;

    setAnimating(true);
    setAnimationText(nextText);

    let cooldown = delay
    let startWord = 0;
    const interval = setInterval(() => {
      if (cooldown > 0) {
        let newText = "";
        for (let i = startWord; i < textLength; i++) {
          newText += letters[Math.floor(Math.random() * letters.length)];
        }
        setAnimationText(newText);
        cooldown--;
      }
      else {
        if (startWord === textLength) {
          clearInterval(interval);
          setAnimating(false);
        }
        cooldown = delay;
        startWord += 1;
      }
    }, 1000);
  };


  const handleOnMouseEnter = () => {
    if (animating) return;
    if (thingStack.length > 1) {
      let newThingStack = [...thingStack];
      newThingStack.pop();
      setThingStack(newThingStack);
    }
    else {
      setThingStack(shuffle(things));
    }

    setCurrentThing(thingStack[thingStack.length - 1])
    startAnimation(currentThing.name);
  };

  return (
    <>
      <div className="hero">
        <h2>I can: </h2>
        <h1 onMouseEnter={handleOnMouseEnter} 
          className={`special-text ${animating}`}
          >
            {animating ? amimationText : currentThing.name}
        </h1>
      </div>
      <div>
        
      </div>
    </>
  );
}