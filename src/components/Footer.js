import React from 'react'

export default function Footer(props) {

    const day = new Date();
    let year = day.getFullYear();

    return (
        <div>
            <footer >
            <p style={{margin:"10% 40% 0 42%" , color:`${props.mode==='dark'?'white':'black'}`}}>Made with ♥ by Ayush kushwaha </p>
               <p style={{margin:"1% 45% 0 45%"  , color:`${props.mode==='dark'?'white':'black'}`}}>copyright &copy; {year}</p>
            </footer>
        </div>
    )
}
