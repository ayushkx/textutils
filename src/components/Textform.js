import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text , setText] = useState('') ;

    const handleUpClick = () => {
           console.log("uppercase is clicked");
           let newText = text.toUpperCase();
           setText(newText);
     };

    const handleLoClick = () => {
        console.log("Lowercase is clicked");
        let newText = text.toLowerCase();
        setText(newText);
     };

     const handleRev = () => {
          let newText = text.split(' ').reverse().join(' ');
          setText(newText);
     };
    
     const handleShuffle = () => {

        let newText = text.split(' ').sort( ()=>Math.random()-0.5 ).join(' ');
        setText(newText);

     };

     const handleClear = () => {
         
        let newText = '';
        setText(newText);
     }


    const handleChange = (e) => {
            setText(e.target.value) ;
    };
    

    return (
        <>
             <div className={`bg-${props.mode} ${props.mode==='dark'?'text-light':'text-dark'}`}>
                 <div className ="container">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className={`form-control bg-${props.mode} ${props.mode==='dark'?'text-light':'text-dark'}`} id="Mytext" rows="8" value={text} onChange = {handleChange}></textarea>
                    </div>
                    <button className="btn btn-primary mx-3 my-2" onClick = {handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-3 my-2" onClick = {handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-3 my-2" onClick = {handleRev}> Reverse Text </button>
                    <button className="btn btn-primary mx-3 my-2" onClick = {handleShuffle}> Shuffle Text </button>
                    <button className="btn btn-primary mx-3 my-2" onClick = {handleClear}> Clear Text  </button>
                </div>
                <div className="container my-3">
                    <h3>Your text summary here..</h3>
                    <h5><span style={{color:'red'}}>{text.length === 0?text.trim().split(' ').length -1:text.trim().split(' ').length}</span> words and <span style={{color:'red'}}>{text.length}</span> characters.</h5>
                    <br/>
                </div>
            </div>
        </>
    )
}
