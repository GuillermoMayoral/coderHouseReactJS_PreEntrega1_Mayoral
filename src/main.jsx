import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCper67Wx19-mIwAvawbIiOXBnHCVAdOMI",
  authDomain: "top-running-c4777.firebaseapp.com",
  projectId: "top-running-c4777",
  storageBucket: "top-running-c4777.appspot.com",
  messagingSenderId: "609691110541",
  appId: "1:609691110541:web:b84172dce3e2eb04e4a6c4"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
