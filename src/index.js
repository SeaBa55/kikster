import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/error";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Project from "./pages/project";

const root = ReactDOM.createRoot(document.getElementById("root"));
const baseURL = process.env.PUBLIC_URL;
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio/",
          children: [
            {
              index: true,
              element: <Portfolio />,
            },
            {
              path: "project/",
              children: [
                {
                  index: true,
                  element: <Navigate to={-1} />,
                },
                {
                  path: ":projectId",
                  element: <Project />,
                }
              ],
            },
          ],
        },
        {
          path: "contact",
          element: <Contact />,
        }
      ],
    },
  ],
  { basename: baseURL }
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
