import { useState } from 'react'
 import logo from './logo.svg'
import './App.css'

import Navbar from './Navbar'
import Textform from './Textform'
import About from './About'

function App() {
  // const [count, setCount] = useState(0)
const [mode, setMode] = useState('dark'); // whether dark mode is enable or not
 const toggleMode = ()=>{
if(mode ==='light') {
  setMode('dark');
  document.body.style.backgroundColor='gray'
} else{
 setMode('light');
 document.body.style.backgroundColor='white'
}

}
  return (
    <>
    
<Navbar name="textUtils" about="About Us" mode={mode} toggleMode = {toggleMode}/>

<div className="container my-3">
 <Textform heading="Enter your text" mode={mode} />
{/* <About/> */}
</div>
</>
  );
}

export default App
