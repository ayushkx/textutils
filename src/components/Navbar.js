import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


 export default function Navbar(props) {
  return (
          <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <a className="navbar-brand" >{props.name}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to= "/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to = "/about">{props.about} </Link>
                </li>
              </ul>
              <div className={`form-check form-switch ${props.mode==='dark'?'text-light':'text-dark'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
              </div>
            </div>
          </div>
        </nav>
        
      </>

  )
}

Navbar.propTypes = {
    name: PropTypes.string,
    about : PropTypes.string
  };

Navbar.defaultProps = {
    name : "your title here" ,
    about : "About here"
};
