import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Top10 from "./pages/Top10";
import Trending from "./pages/Trending";
import Watchlist from "./pages/Watchlist";
import Footer from "./components/Footer";
import CoinByID from "./pages/CoinByID";
import { createContext } from "react";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export const Data = createContext();

const Applayout = () => {
  return (
    <Provider store={appStore}>
      <Data.Provider value={"Anmol"}>
        <div>
          <Navbar />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </Data.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/top10", element: <Top10 /> },
      { path: "/watchlist", element: <Watchlist /> },
      { path: "/trending", element: <Trending /> },
      { path: "/coin/:id", element: <CoinByID /> },
      { path: "/signin", element: <Signin /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
