import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react' ;
import Alert from './components/Alert';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Footer from './components/Footer';


function App() {

  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);

  const showAlert = (message ) => {

    setAlert(message);

    setTimeout(function(){

      setAlert(null);
    },1500);

  };

  const toggle = ()=> {

    if(mode === 'light'){
      
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("DarkMode has been enabled !!" );

    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = "white" ;
      showAlert("Light Mode has been enabled !!");
    }

  };


  return (
         <Router>
         <Navbar name ="TextUtils" about ="About" mode={mode}  toggle={toggle}/>
          <Alert alert={alert}/>
          <div className="container my-3">
            <Textform heading = "Enter your text below..." mode={mode} showAlert={showAlert} />
         </div>
         <Footer mode={mode}/>
         </Router>
  );
}  

export default App;
