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
                <a className="nav-link active " aria-current="page" href="#"><NavLink  className="text-decor" activeclassname="active" to={'/'}>Home</NavLink></a>
            </li>
            <li className="nav-item nav-ele">
            <a className="nav-link active " aria-current="page" href="#"><NavLink  className="text-decor" activeclassname="active" to={'/about'}>About Us</NavLink></a>
            </li>
            <li className="nav-item dropdown nav-ele">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Our Offerings
                </a>
                <ul className="dropdown-menu" >
                    <li><a className="dropdown-item"  href="#"><Link to={'/therapiesoffered'}>Therapies Offered</Link></a></li>
                    <li><a className="dropdown-item" href="#">Services Offered</a></li>
                </ul>
            </li>
            <li className="nav-item nav-ele">
                <a className="nav-link" href="#"><NavLink  className="text-decor" activeclassname="active" to={'/faq'}>FAQ</NavLink></a>
            </li>
            <li className="nav-item dropdown nav-ele">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Patient Education
                </a>
                <ul className="dropdown-menu" >
                    <li><a className="dropdown-item"  href="#">Conditions We Treat</a></li>
                    <li><a className="dropdown-item" href="#">Symptoms We Treat</a></li>
                    <li><a className="dropdown-item" href="#">Home Excercises</a></li>
                    <li><a className="dropdown-item" href="#">Blog</a></li>
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

