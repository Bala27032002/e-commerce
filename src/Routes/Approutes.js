import React from 'react'
import {Routes,Route, Router} from 'react-router-dom';
import Home from '../Pages/Home';
import ShirtDetails from '../Component/ShirtDetails';

function Approutes() {

    const routes =[
        { path:"/" , element:<Home />},
        { path:"/shirt/:id" , element:<ShirtDetails />},
        { path:"/shirt/:id" , element:<ShirtDetails />}

]
  return (
    <>
  
        
  <Routes>
    {routes.map((route)=>(
        
        <Route path={route.path} element={route.element}/>

        
    ))}
  </Routes>

        
        
    </>
  )
}

export default Approutes