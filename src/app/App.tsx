import { useState } from 'react';
import Header from '../components/header/Header';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </> 
  )
}

export default App
