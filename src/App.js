import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [buttoncolour,setButtonColour] = useState('primary');

    const changeDarkModeColour = (backgroundcolor,buttoncolour)=>{
      if(mode==='dark'){
        document.body.style.backgroundColor = backgroundcolor;
        setButtonColour(buttoncolour)
      }
    }

    const toggleMode = () =>{
        if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#292735';
        showAlert("Dark mode has been enabled",'success');
        document.title = 'Text Utils- Dark Mode'
        // setInterval(() => {
        //   document.title = 'Text Utils is Amazing'
        // }, 2000);
        // setInterval(() => {
        //   document.title = 'Text Utils is Boring'
        // }, 1500);
    }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled",'success');
            document.title = 'Text Utils- Light Mode'
        }

    }
  const [alert,setAlert] = useState(null);
    const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type : type
      }) 
      
      setTimeout(() => {
        setAlert(null);
      }, 1750);
    }

  return (
    <>
    {/* <Router> */}
    <Navbar title="LearnReact" mode={mode} toggleMode={toggleMode} hometext="HomeText" changeDarkModeColour ={changeDarkModeColour}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm heading="Enter your text to analyze" mode = {mode} showAlert={showAlert} buttoncolour = {buttoncolour}/>  
          {/* </Route> */}
    {/* </Switch> */}



          


    </div>
    {/* </Router> */}


    </>
  );
}

export default App;
