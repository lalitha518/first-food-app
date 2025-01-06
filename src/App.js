import React, { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
//import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
//import Grocery from "./components/Grocery";


const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));
const Layout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
      <Header/>
      <Outlet />
      <Footer />

    </div>
    </Provider>
    
  );
};

// Define the routes with Layout wrapping them
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <Suspense fallback= {<h1>Loading..............</h1>}><About /></Suspense>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "grocery",
        element: <Suspense fallback = {<h1>Grocery Loading.......</h1>}><Grocery /></Suspense>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
