import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import Kamal from "./Kamal.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Dashboards/Home/Home.jsx";
import Labs from "./components/Dashboards/Labs/Labs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='labs' element={<Labs />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Kamal /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
