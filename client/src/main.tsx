import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* TODO : loading */}
    <Suspense fallback={null}>
      <Router>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Router>
    </Suspense>
  </React.StrictMode>
);
