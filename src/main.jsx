import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import { Route,RouterProvider,createBrowserRouter,  createRoutesFromElements } from 'react-router-dom';
import MainHome from './Components/Home/MainHome.jsx';
import MainAbout from './Components/About/MainAbout.jsx';
import MainFaq from './Components/FAQ/MainFaq.jsx';
import TherapiesOffered from './Components/TherapiesOffered/TherapiesOffered.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<MainHome/>} />
        <Route path='therapiesOffered' element={<TherapiesOffered/>}/>
    
      <Route path='about' element={<MainAbout/>} />
      <Route path='faq' element={<MainFaq/>} />
      

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
