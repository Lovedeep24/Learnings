import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouteProvider,
}from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" elements={<h1>Home Page</h1>}></Route>
  )
);

function App() {
  return(
    <div>
      <RouteProvider router={router}/>
    </div>
  );
}

export default App;
