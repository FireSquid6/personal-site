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
  const filled = "\udb80\udd2e"
  const empty = "\udb80\udd31"

  const delay: number = 3;
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
        let newText = nextText.slice(0, startWord);
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
    }, 10);
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
    startAnimation(thingStack[thingStack.length - 1].name);
  };

  const getProficiencyBar = (proficiency: number): string => {
    let bar = "";
    for (let i = 0; i < proficiency; i++) {
      bar += filled;
    }
    for (let i = 0; i < 5 - proficiency; i++) {
      bar += empty;
    }
    return bar;
  };

  return (
    <>
      <section className="hero">
        <h2>I can: </h2>
        <h1 onTouchStart={handleOnMouseEnter} onMouseEnter={handleOnMouseEnter} 
          className={`special-text ${animating}`}
          >
            {animating ? amimationText : currentThing.name}
        </h1>
      </section>
      <section className="skills">
        <div className="skills-list">
            {currentThing.tech.map(({name, proficiency}, index) => (
              <div key={index} className={`skill prof-${proficiency}`}>
                <span className="align-left">{getProficiencyBar(proficiency)}</span>
                <span className="align-right">{name}</span>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}