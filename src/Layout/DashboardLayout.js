import React, { useContext } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin);
  const navigate = useNavigate();

  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashBoard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div
          style={{
            backgroundColor: "#1abc9c",
          }}
          className="drawer-side "
        >
          <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
          <ul className=" menu  p-4 w-80 text-[16px] font-semibold bg-base-100 text-base-content">
            <div onClick={() => navigate(-1)}>
              <p className="text-black text-3xl  my-2">
                <BsFillArrowLeftCircleFill />
              </p>
            </div>
            <div className="mt-10">
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              {isAdmin && (
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
              )}

              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/addProduct">Add Product</Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
