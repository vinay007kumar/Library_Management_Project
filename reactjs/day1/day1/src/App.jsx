import { useState } from 'react';
import logo from './logo.svg'
import './App.css'

import Navbar from './Navbar';
import Textform from './Textform';
import About from './About'
import Alertss from './Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState('dark'); // whether dark mode is enable or not
  const [Alertsss, setAlertsss] = useState({
    // msg: "",
    // type: "" 
  });

  const shoAlertsss = (message, type) => {
    setAlertsss({
      msg: message,
      type: type
    })
    setTimeout(() => {     // use time alert
      setalert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#131342';
      shoAlertsss("dark mode has been enable", "success");//Alert in the switch case 
      document.title = 'textUtile-dark mode';//title change in use for switch case
      setInterval(() => {
        document.title = 'textUtile-this is  mode';
      }, 2000);


      setInterval(() => {
        document.title = 'textUtile-my textUtils mode';
      }, 1500);

      setInterval(() => {
        document.title = 'textUtile-install the textUtiles mode';
      }, 3000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      shoAlertsss("light mode has been enable", "success");
      document.title = 'textUtile-light mode'; // title change in use for switch case
    }

  }
  return (
    <>
     <Router>
      <Navbar name="textUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alertss alert={Alertsss} />
      
      <div className="container my-3">

      <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route  exact path="/" element={<Textform shoAlertsss={shoAlertsss} heading="Enter Your Words" mode={mode} /> }>
            
          </Route>
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App
