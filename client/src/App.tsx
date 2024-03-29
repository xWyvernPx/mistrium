import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthFormWrapper from "./_components/common/form/AuthFormWrapper";
import UpdateCategoryForm from "./_components/admin/form/UpdateCategoryForm";
import Modal from "./_components/common/modal/Modal";
import PrivateAdminRoute from "./_helper/PrivateAdminRoute";
import PrivateRoute from "./_helper/PrivateRoute";
import useAuth from "./_hook/useAuth";
import useModal from "./_hook/useModal";
import AdminAccount from "./_page/admin/account/AdminAccount";
import AdminCategory from "./_page/admin/category/AdminCategory";
import Dashboard from "./_page/admin/dashboard/Dashboard";
import AdminOrderPage from "./_page/admin/order/AdminOrderPage";
import CheckoutPage from "./_page/checkout/CheckoutPage";
import LandingPage from "./_page/landing/LandingPage";
import ProductDisplayPage from "./_page/product/ProductDisplayPage";
import ProductPage from "./_page/product/ProductPage";
import OrdersPage from "./_page/profile/OrdersPage";
import ProfilePage from "./_page/profile/ProfilePage";
import AddCategory from "./_components/admin/form/AddCategory";
import AdminProduct from "./_page/admin/product/AdminProduct";
import AddProduct from "./_components/admin/form/AddProduct";
import ProductDescriptionView from "./_components/admin/form/ProductDescriptionView";
import UpdateProduct from "./_components/admin/form/UpdateProduct";
import ProductDetailPage from "./_page/product/ProductDetailPage";
import Footer from "./_components/common/footer/Footer";
import IntroVideo from "./_components/landing/intro/IntroVideo";
const Heaeder = React.lazy(() => import("./_components/common/header/Heaeder"));
function App() {
  useAuth();
  const { componentName, isOpen, payload } = useModal();
  return (
    <>
      <Routes>
        <Route path="/admin" element={<PrivateAdminRoute />}>
          <Route path="" element={<Dashboard />} />
          <Route path="account" element={<AdminAccount />} />
          <Route path="order" element={<AdminOrderPage />}></Route>
          <Route path="product" element={<AdminProduct />}></Route>
          <Route path="category" element={<AdminCategory />}></Route>
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
            <Route path="detail/:id" element={<ProductDetailPage />} />
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
      <Footer />
      {isOpen && (
        <Modal
          render={() => {
            if (componentName === "LOGIN") return <AuthFormWrapper />;
            else if (componentName === "UPDATE_CATEGORY")
              return <UpdateCategoryForm category={payload} />;
            else if (componentName === "ADD_CATEGORY") return <AddCategory />;
            else if (componentName === "ADD_PRODUCT")
              return <AddProduct handleAdd={payload} />;
            else if (componentName === "PREVIEW_PRODUCT_DESCRIPTION")
              return <ProductDescriptionView />;
            else if (componentName === "UPDATE_PRODUCT")
              return <UpdateProduct payload={payload} />;
            else if (componentName === "INTRO_VIDEO") return <IntroVideo />;
          }}
        />
      )}
    </>
  );
}

export default App;
