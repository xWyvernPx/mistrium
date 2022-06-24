import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./_components/common/footer/Footer";
import Heaeder from "./_components/common/header/Heaeder";
import CheckoutPage from "./_page/checkout/CheckoutPage";
import LandingPage from "./_page/landing/LandingPage";
import ProductDisplayPage from "./_page/product/ProductDisplayPage";
import ProductPage from "./_page/product/ProductPage";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <Heaeder />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:slug" element={<ProductDisplayPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* <Route path="/*" element={<div>404</div>} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
