import { useState } from 'react';
import Header from '../components/header/Header';
import reactLogo from './assets/react.svg';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About title="Jonathan Deiss" subtitle="Fullstack, Software, and Game Developer" />
      <Hero />
    </> 
  )
}

export default App
