import { useState } from "react";
import Header from "../components/header/Header";
import reactLogo from "./assets/react.svg";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Links from "../components/links/Links";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About
        title="Jonathan Deiss"
        subtitle="Fullstack, Software, and Game Developer"
      />
      <Hero />
      <Projects />
      <Links />
    </>
  );
}

export default App;
