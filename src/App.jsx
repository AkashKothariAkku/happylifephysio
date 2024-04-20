import { useState } from 'react'
import './App.css'
import Head1 from './Components/Header/Head1'
import Footer1 from './Components/Footer/Footer1'
import MainHome from './Components/Home/MainHome'
import {Outlet} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  style={{backgroundColor:'black'}}>
    <Head1/>
    <Outlet/> 
    <Footer1/>
    </div>
  )
}

export default App
