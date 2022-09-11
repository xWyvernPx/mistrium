import React, { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminLayout from "../_components/common/layout/AdminLayout";
import Loading from "../_components/common/loader/Loading";
import useAuth from "../_hook/useAuth";
import useModal from "../_hook/useModal";

const PrivateAdminRoute: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const { user, isLoaded } = useAuth();
  const { setModalState } = useModal();
  if (!isLoaded) return <Loading />;
  else if (user && user.role)
    return (
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    );
  else {
    setModalState({ isOpen: true, componentName: "LOGIN", payload: null });
    return <Navigate to={"/"} />;
  }
};
export default PrivateAdminRoute;
