import React, { useEffect, useState } from "react";
import NavbarDemo from "../Components/Navbar";
import {
  getUser,
  verify,
  googleLogin,
} from "../features/authentication/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { fetchUserProfile } from "../features/authentication/ProfileSlice";
import NavigationCard from "../Components/NavigationCard";
import { friendRequestList } from "../features/friends/FriendSlice";
import { fetchFriends } from "../features/authentication/ProfileSlice";
import { getSalesDetails } from "../features/customAdmin/customAdminSlice";
import AdminNavigationCard from "../AdminNavigationCard";

// Simple loader component
const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div
      className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
      role="status"
    ></div>
    <span className="sr-only">Loading...</span>
  </div>
);

const Layout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { access, isAuthenticated, user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const values = queryString.parse(location.search);
    const code = values.code;
    console.log("code is ", code);
    if (code) {
      console.log("inside the code if block");
      dispatch(googleLogin(code))
        .catch((error) => {
          setLoading(false);
          console.error("Google Login Error:", error);
          // Handle error gracefully, show error message to user
        })
        .finally(() => setLoading(false));
    } else {
      Promise.all([
        dispatch(verify()),
        dispatch(getUser()),
        dispatch(fetchUserProfile()),
        dispatch(friendRequestList()),
        dispatch(fetchFriends()),
      ]).finally(() => setLoading(false));

      const intervalId = setInterval(() => {
        dispatch(verify());
      }, 270000);

      return () => clearInterval(intervalId);
    }
  }, [location, dispatch, access]);
  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

  // Once loaded, render the authenticated layout or fallback
  return (
    <>
      <NavbarDemo />
      {isAuthenticated ? (
        <div className="flex max-w-7xl mx-auto gap-6">
          <div className="w-3/12">
            {profile?.is_staff ? <AdminNavigationCard /> : <NavigationCard />}
          </div>
          <div className="w-9/12">{children}</div>
        </div>
      ) : (
        <div className="">{children}</div>
      )}
    </>
  );
};

export default Layout;
