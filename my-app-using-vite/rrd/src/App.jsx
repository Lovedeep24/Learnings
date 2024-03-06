import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet
}from "react-router-dom";

import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" elements={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path="Contact" element={<Contact />} />
      <Route path="About" element={<About />} />
      <Route path="Courses" element={<Courses />} />

    </Route>
  )
);

function App() {
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;