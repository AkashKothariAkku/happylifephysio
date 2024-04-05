import React from 'react'
import { NavLink } from 'react-router-dom'
import Accordion10 from './Accordion10'

import Home6 from './Home6'
import Home5 from './Home5'
import Home4 from './Home4'
import Home3 from './Home3'
import Home2 from './Home2'
import Home from './Home'
import TherapiesOffered from '../TherapiesOffered/TherapiesOffered'

function MainHome() {
  return (
    <>
    
        <Home/>
        <Home2/>
        <Home3/>
        <Home4/>
        <Home5/>
        <Home6/>
        <Accordion10/>
        <TherapiesOffered/>
        
    
    </>
  )
}

export default MainHome
