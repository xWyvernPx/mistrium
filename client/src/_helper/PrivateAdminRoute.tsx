import React, { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../_components/common/loader/Loading";
import useAuth from "../_hook/useAuth";
import useModal from "../_hook/useModal";

const PrivateAdminRoute: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const { user, isLoaded } = useAuth();
  const { setModalState } = useModal();
  if (!isLoaded) return <Loading />;
  else if (user && user.role) return <Outlet />;
  else {
    setModalState({ isOpen: true, componentName: "LOGIN" });
    return <Navigate to={"/"} />;
  }
};
export default PrivateAdminRoute;
