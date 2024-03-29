import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import AddProDuct from "../../Pages/DashBoard/AddProduct/AddProDuct";
import AddProDuctInfo from "../../Pages/DashBoard/AddProduct/AllProductInfo";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import FeedBack from "../../Pages/FeedBack/FeedBack";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Message from "../../Pages/Message/Message";
import Orders from "../../Pages/Orders/Orders";
import Product from "../../Pages/Product/Product";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/feedback",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "/message",
        element: <Message></Message>,
      },

      {
        path: "/products/category/:id",
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProDuct />,
      },
    ],
  },
]);
