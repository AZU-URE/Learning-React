import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
const Grocery = lazy(() => import("./components/Grocery"));
import UserContextProvider from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  console.log("inside app");
  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContextProvider>
          <Header />
          <Outlet />
        </UserContextProvider>
      </Provider>
    </div>
  );
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routers} />);
