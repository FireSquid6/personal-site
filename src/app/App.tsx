import { useState } from "react";
import Header from "../components/header/Header";
import reactLogo from "./assets/react.svg";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Links from "../components/links/Links";
import Experience from "../components/experience/Experience";
import BackToTop from "../components/back-to-top/BackToTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <BackToTop />
      <About
        title="Jonathan Deiss"
        subtitle="Fullstack, Software, and Game Developer"
      />
      <Hero />
      <Projects />
      <Experience />
      <Links />

      <footer>
        <p>
          Made by Jonathan Deiss with the{" "}
          <a href="https://github.com/folke/tokyonight.nvim">Tokyonight</a>{" "}
          palette
        </p>
      </footer>
    </>
  );
}

export default App;
