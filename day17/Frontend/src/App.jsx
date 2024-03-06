import React, { useEffect } from 'react'
import axios from "axios";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import Home from './Home';
const router= createBrowserRouter(createRoutesFromElements(<Route path='/' element={<Home/>}
></Route>))
export default function App() {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}
