import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./app/App.jsx";
import store from "./app/store.js";
// import "./stylesheets/styles.scss";
import "../style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
