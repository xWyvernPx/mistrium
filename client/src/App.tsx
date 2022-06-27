import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.css";
import Footer from "./_components/common/footer/Footer";
import Heaeder from "./_components/common/header/Heaeder";
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
function App() {
  useAuth();
  const { componentName, isOpen } = useModal();
  return (
    <>
      <Heaeder />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:slug" element={<ProductDisplayPage />} />
        <Route path="/checkout" element={<PrivateRoute />}>
          <Route path="" element={<CheckoutPage />} />
        </Route>
        {/* <Route path="/*" element={<div>404</div>} /> */}
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
