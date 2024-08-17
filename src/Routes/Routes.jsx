import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Components/Private/PrivateRoute";
import UpdateProducts from "../Pages/Home/Products/UpdateProducts";
import AddProduct from "../Pages/Home/Products/AddProduct";
import Action from "../Pages/Action/Action";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";

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
        path: "/action/products/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://shop-ease-server-amber.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/addproducts",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/action",
        element: (
          <PrivateRoute>
            <Action></Action>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
