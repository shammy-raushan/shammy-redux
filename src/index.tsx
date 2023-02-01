import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { store } from "./app/store";
import store from "./app/redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// import store from "./store";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  // </BrowserRouter>
  //  <Router>
  //  <App />
  // </Router>
);
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import { render } from "@testing-library/react";
// import App from "./App";
// import { createRoot } from "react-dom/client";
// import React from "react";
// import {
//   BrowserRouter,
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import ReactDOM from "react-dom";

// const container = document.getElementById("root")!;
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}></Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
