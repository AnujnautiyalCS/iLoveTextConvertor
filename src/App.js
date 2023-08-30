import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light'); 
  const imgurl = './logomain.png';
  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar imgurl={imgurl} aboutText="About us" mode={mode} toggleMode={toggleMode} />
       <TextForms heading="Enter your Text to Convert" /> 
       <About/>
    </>
  );
}

export default App;