import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./component/Login.jsx";
import Game from "./component/Game.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import authorizedUserStore from "./store/userData.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/game",
        element: <Game />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <center className="m-5 p-5">
        <h1>404 Page Not Found</h1>
      </center>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={authorizedUserStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
