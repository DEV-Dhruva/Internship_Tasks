import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardSummary from "./components/CardSummary.jsx";
import BookTicket from "./components/BookTicket.jsx";
import { Provider } from "react-redux";
import showStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/viewmore/:data",
    element: <CardSummary />,
  },
  {
    path: "/bookticket",
    element: <BookTicket />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={showStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
