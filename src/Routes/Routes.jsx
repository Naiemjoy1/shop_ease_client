import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ShowProducts from "../Pages/Dashboard/ShowProducts/ShowProducts";
import PrivateRoute from "../Components/Private/PrivateRoute";
import UpdateProducts from "../Pages/Home/Products/UpdateProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products/:id",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "products",
            element: <ShowProducts></ShowProducts>,
          },
        ],
      },
    ],
  },
]);
