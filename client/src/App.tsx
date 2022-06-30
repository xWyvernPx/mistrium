import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.css";
import Footer from "./_components/common/footer/Footer";
const Heaeder = React.lazy(() => import("./_components/common/header/Heaeder"));
import useAuth from "./_hook/useAuth";
import CheckoutPage from "./_page/checkout/CheckoutPage";
import LandingPage from "./_page/landing/LandingPage";
import ProductDisplayPage from "./_page/product/ProductDisplayPage";
import ProductPage from "./_page/product/ProductPage";
import modalAtom from "./_atom/modalAtom";
import Modal from "./_components/common/modal/Modal";
import useModal from "./_hook/useModal";
import PrivateRoute from "./_helper/PrivateRoute";
import AuthFormWrapper from "./_components/common/form/AuthFormWrapper";
import LoginForm from "./_components/common/form/LoginForm";
import ProfilePage from "./_page/profile/ProfilePage";
import OrdersPage from "./_page/profile/OrdersPage";
import { ToastContainer } from "react-toastify";
import Loading from "./_components/common/loader/Loading";
import PrivateAdminRoute from "./_helper/PrivateAdminRoute";
import AdminLayout from "./_components/common/layout/AdminLayout";
function App() {
  useAuth();
  const { componentName, isOpen } = useModal();
  return (
    <>
      <Routes>
        <Route path="/admin" element={<PrivateAdminRoute />}>
          <Route path="" element={<AdminLayout />} />
        </Route>
        <Route
          path="/"
          element={
            <>
              <Heaeder />
              <Outlet />
            </>
          }
        >
          <Route path="" element={<LandingPage />} />
          <Route path="/products">
            <Route path="" element={<ProductPage />}></Route>
            <Route path=":slug" element={<ProductDisplayPage />} />
          </Route>
          <Route path="/checkout" element={<PrivateRoute />}>
            <Route path="" element={<CheckoutPage />} />
          </Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="" element={<ProfilePage />} />
            <Route path="orders" element={<OrdersPage />} />
          </Route>
        </Route>
        <Route path="/*" element={<div>404</div>} />
      </Routes>
      {/* <Footer /> */}
      {isOpen && (
        <Modal
          render={() => {
            if (componentName === "LOGIN") return <AuthFormWrapper />;
          }}
        />
      )}
    </>
  );
}

export default App;
