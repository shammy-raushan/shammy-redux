import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./components/Login";
import { Counter } from "./features/counter/Counter";
import { Register } from "./components/Register";
import { getPosts } from "./app/redux/features/postSlice";
import { Typography } from "@material-ui/core";
import { Welcome } from "./components/Welcome";
import { HomePage } from "./components/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";
import { BookedHotels } from "./components/BookedHotels";

export default function App() {
  return (
    <>
      {/* <Register /> */}
      <Welcome />

      {/* <Login /> */}
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">HomePage</Link>
              </li>
              <li>
                <Link to="/hotels">See All</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
            </ul>
          </nav> */}

          {/* 👇️ Wrap your Route components in a Routes component */}
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/hotels" element={<BookedHotels />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
