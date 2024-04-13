import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import { Route,RouterProvider,createBrowserRouter,  createRoutesFromElements } from 'react-router-dom';
import MainHome from './Components/Home/MainHome.jsx';
import MainAbout from './Components/About/MainAbout.jsx';
import TherapiesOffered from './Components/TherapiesOffered/TherapiesOffered.jsx';
import TherapiesDetail from './Components/TherapiesOffered/TherapiesDetail.jsx';
import Faq from './Components/FAQ/Faq.jsx';
import ServicesOffered from './Components/ServicesOffered/ServicesOffered.jsx';
import Conditions from './Components/Conditions/Conditions.jsx';
import ConditionsDetail from './Components/Conditions/ConditionsDetail.jsx';
import Symptoms from './Components/Symptoms/Symptoms.jsx';
import SymptomsDetail from './Components/Symptoms/SymptomsDeatil.jsx';
import HomeExercises from './Components/HomeExercises/HomeExercises.jsx';
import HomeExercisesDetail from './Components/HomeExercises/HomeExercisesDetail.jsx';
import Blog from './Components/Blog/Blog.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<MainHome/>} />
        <Route path='therapiesoffered' element={<TherapiesOffered/>}>
        </Route>
          <Route path='/therapiesoffered/:id' element={<TherapiesDetail/>}/>
    
        <Route path='servicesoffered' element={<ServicesOffered/>}>
        </Route>
          <Route path='/servicesoffered/:id' element={<TherapiesDetail/>}/>

        <Route path='conditions' element={<Conditions/>}>
        </Route>
          <Route path='/conditions/:id' element={<ConditionsDetail/>}/>

        <Route path='symptoms' element={<Symptoms/>}>
        </Route>
          <Route path='/symptoms/:id' element={<SymptomsDetail/>}/>

        <Route path='exercises' element={<HomeExercises/>}>
        </Route>
          <Route path='/exercises/:id' element={<HomeExercisesDetail/>}/>

        <Route path='blog' element={<Blog/>}>
        </Route>

      <Route path='about' element={<MainAbout/>} />
      <Route path='faq' element={<Faq/>} />
      

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
