import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Head1() {
  return (

    <>


<nav className="navbar mt-0 navbar-expand-lg  fixed-top  shadow main-div " >
<div className="container-fluid  d-flex justify-content-between ">
    <div >
        <a className="navbar-brand fw-bold logo mx-4 " ><img src="Happy_Life-removebg-preview.png" alt="" height="50px" width="50px" href=""   /></a>
    </div>
    <div className='nav-button '>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    </div>

    <div>
    <div className="collapse navbar-collapse " id="navbarNavDropdown" >
        
        <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item nav-ele">
                <NavLink  className="  text-decor" activeclassname="active" to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item nav-ele">
                <NavLink  className="  text-decor" activeclassname="active" to={'/about'}>About Us</NavLink>
            </li>
            <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle nav-ele fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Our Offerings
                </a>
                <ul className="dropdown-menu" >
                    <li><Link to={'/therapiesoffered'} className="dropdown-item">Therapies Offered</Link></li>
                    <li><Link to={'/servicesoffered'} className="dropdown-item">Services Offered</Link></li>
                </ul>
            </li>
            <li className="nav-item nav-ele">
     
                <NavLink  className="  text-decor" activeclassname="active" to={'/faq'}>Faq</NavLink>
            </li>
            <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle nav-ele fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Patient Education
                </a>
                <ul className="dropdown-menu" >
                    <li><Link to={'/conditions'} className="dropdown-item">Conditions We Treat</Link></li>
                    <li><Link to={'/symptoms'} className="dropdown-item">Symptoms We Treat</Link></li>
                    <li><Link to={'/exercises'} className="dropdown-item">Home Exercises</Link></li>
                    <li><Link to={'/blog'} className="dropdown-item">Blog</Link></li>
                    
                    
                
                </ul>
            </li>
        
        </ul>
    </div>
    </div>
</div>
</nav>

    </>
  )
}

export default Head1

