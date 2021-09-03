import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react' ;


function App() {

  const [mode , setMode] = useState("light");

  const toggle = ()=> {

    if(mode === 'light'){
      
      setMode("dark");
      document.body.style.backgroundColor = "black";

    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
    }

  };


  return ( <>
          <Navbar name ="TextUtils" about ="About" mode={mode}  toggle={toggle}/>
          <div className="container my-3">
            {/* <About/> */}

          <Textform heading = "Enter your text below..." mode={mode} />
          </div>
          
         </> 
   
  );
}  

export default App;
