import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import ContactUs from "./src/components/ContactUs";
import ResBody from "./src/components/ResBody";
import RestaurantDetails from "./src/components/RestaurantDetails";
import User from "./src/components/User";
import UserContext from "./src/utils/UserContext";
import Cart from "./src/components/Cart";
import { Provider } from "react-redux";
import appStore from "./src/utils/store";
// import Grocery from "./src/components/Grocery";
// const heading = React.createElement('h1', {}, "Swiggy.com");
const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./src/components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ currentUser: userName, setUserName }}>
        <div>
          <Header />
          <div className="pt-32">
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ResBody />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/teams",
        element: <User />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
