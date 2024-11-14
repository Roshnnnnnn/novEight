import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setUserInfo, setUserToken } from "../redux/userSlice";

const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.userToken);
  const user = useSelector((state) => state.login.user);

  useEffect(() => {
    console.log("Fetching user data");

    const userInformation = localStorage.getItem("userInformation");
    if (userInformation) {
      dispatch(setUserInfo(JSON.parse(userInformation)));
    }

    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(setUserToken(token));
    }
  }, [dispatch]);

  if (!userToken || !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
