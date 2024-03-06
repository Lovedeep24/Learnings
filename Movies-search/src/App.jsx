import React from 'react'
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route element ={<Layout/>}>
    <Route index element ={<Home/>} />
    </Route>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
