import { useState } from 'react';
import Header from '../components/header/Header';
import About from '../components/about/About';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AwesomeSlider 
      bullets={false}
      buttonContentLeft={<Header />}
      fillParent={true}
    >
      <div>
        <About title="Jonathan Deiss" subtitle="web developer"/>
      </div>
    </AwesomeSlider>
    </> 
  )
}

export default App
