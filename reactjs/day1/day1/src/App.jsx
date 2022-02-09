import { useState } from 'react'
 import logo from './logo.svg'
import './App.css'

import Navbar from './Navbar'
import Textform from './Textform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<Navbar name="textUtils" about="About Us"/>

<div className="container my-3">
<Textform heading="Enter your text"/>
</div>
</>
  );
}

export default App
