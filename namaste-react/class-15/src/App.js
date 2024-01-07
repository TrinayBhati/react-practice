import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import MenuPage from "./components/MenuPage";
import Profile from "./components/Profile";
import Skeleton from "./components/Skeleton";
import UserContext from "./utils/context/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const Instant = lazy(() => import("./components/Instant"));

const AppLayout = () => {
  const [query, setQuery] = useState(null);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ setQuery: setQuery, query: query }}>
        <div className="bg-slate-900">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:id",
        element: <MenuPage />,
      },
      {
        path: "/instant",
        element: (
          <Suspense fallback={<Skeleton />}>
            <Instant />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
