import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid" >
    <a className="navbar-brand" href="/"><img src={props.imgurl} alt="testingglogo" className='App-logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-items">
          <a  className="nav-link active" aria-current="page" href="/"><strong>HOME</strong></a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="/"><strong>TEXT</strong></a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="/"><strong>NUMBERS</strong></a>
        </li>
        <li  className="nav-item">
          <a   className="nav-link active" aria-current="page" href="/"><strong>EXTRACTORS</strong></a>
        </li>
        <li   className="nav-item">
          <a  className="nav-link active" aria-current="page" href="/"><strong>COUNTERS</strong></a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li> */}
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
        
      </form>
      <div className={`form-check form-switch  mx-3 text-${props.mode ==='light'?'dark':'light'}`}>
        Enable {props.mode ==='light'?'dark':'light'} mode
         <input onClick={props.toggleMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          
        </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired
                  }
Navbar.defaultProps = {
  title:'Set your logo here',
  aboutText:"link 1"
}