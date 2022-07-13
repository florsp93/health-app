import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { UserProvider } from "./contexts/user.context";

import "./components/sign-up-form/sign-up-form.styles.css";
import "./components/form-input/form-input.styles.css";
import "./index.css";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
