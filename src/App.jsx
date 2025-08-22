import { useState } from 'react'

import {First,Second,Third,Fourth} from './File'
import Layout from "./Layout";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<Layout/>} >
        <Route index  element ={<First/>}/> 
        <Route path='/second'  element ={<Second/>}/> 
        <Route path='/third'  element ={<Third/>}/> 
        <Route path='/fourth'  element ={<Fourth/>}/> 

        
      </Route>
    )
  )
  

  return (
    
    
  
      <>
      
      
      <RouterProvider  router={router}/>
            
  
      </>
   
  )
}

export default App
