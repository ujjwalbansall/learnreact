import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.hometext}</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}

        <button type="button" className="btn btn-danger rounded-lg" data-bs-toggle="button" onClick={()=>props.changeDarkModeColour('#6c3645','danger')} >Red</button>
        <button type="button" className="btn btn-success rounded-lg" data-bs-toggle="button" onClick={()=>props.changeDarkModeColour('#2d5735','success')} >Green</button>
        <button type="button" className="btn btn-primary rounded-lg" data-bs-toggle="button" onClick={()=>props.changeDarkModeColour('#292735','primary')}>Blue</button>

        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    hometext: PropTypes.string.isRequired} 

Navbar.defaultProps = {
    title: 'Navbar title here',
    hometext: "Home text will appear here"
    };