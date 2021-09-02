import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react' ;


function App() {

  const [mode , setMode] = useState("dark");

  return ( <>
          <Navbar name ="TextUtils" about ="About"/>
          <div className="container my-3">
            {/* <About/> */}

          <Textform heading = "Enter your text below..." />
          </div>
          
         </> 
   
  );
}  

export default App;
