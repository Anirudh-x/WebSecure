// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

// Stylings
import "./index.css";

// Components
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx"
import Tools from "./pages/Tools/Tools.jsx"
import Technology from "./pages/Technology/Technology.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import IPResolver from "./pages/ToolsPages/IPResolver.jsx";
import NetworkScanner from "./pages/ToolsPages/NetworkScanner.jsx";
import IPGeolocation from "./pages/ToolsPages/IPGeolocation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tools",
        element: <Tools />,
        children: [
          {
            path: "/tools/ip",
            element: <IPResolver />
          },
          {
            path: "/tools/netscan",
            element: <NetworkScanner />
          },
          {
            path: "/tools/location",
            element: <IPGeolocation />
          },
          
        ]
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
