import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import Loading from "./_components/common/loader/Loading";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Suspense fallback={<Loading />}>
    <Router>
      <RecoilRoot>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </RecoilRoot>
    </Router>
  </Suspense>
  // </React.StrictMode>
);
