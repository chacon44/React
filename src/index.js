import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
