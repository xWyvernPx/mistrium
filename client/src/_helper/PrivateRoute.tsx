import React, { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../_hook/useAuth";
import useModal from "../_hook/useModal";

const PrivateRoute: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const { user } = useAuth();
  const { setModalState } = useModal();
  if (!user) {
    setTimeout(() => {
      setModalState({ isOpen: true, componentName: "LOGIN" });
    }, 1000);
    return <Navigate to={"/"} />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
