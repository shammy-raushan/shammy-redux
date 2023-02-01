import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { signUpUser } from "../app/redux/authSlice";
import { AppDispatch } from "../app/store";
import styles from "./Login.module.scss";
import { getPosts } from "../app/redux/features/postSlice";
import { Counter } from "../features/counter/Counter";

import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
// import { Login } from "./components/Login";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { posts, loading } = useSelector((state: any) => state.post);
  const dispatch = useAppDispatch();
  // interface Budget {
  //   name: string;
  //   email: string;
  //   password: string;
  // }
  useEffect(() => {
    dispatch(
      getPosts({
        name,
        email,
        password,
      })
    );
  }, []);
  if (loading) {
    return <h2>loading.....</h2>;
  }
  const registerHandle = () => {
    // dispatch(getPosts(name, email, password));
    console.log(dispatch);
  };

  return (
    <>
      <div className={styles.container}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <h3>Register</h3>
          </Grid>
          <Grid item xs={12} sm={12}>
            <label htmlFor="">Name</label>
          </Grid>
          <Grid item xs={12} sm={12}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <label htmlFor="">Email</label>
          </Grid>
          <Grid item xs={12} sm={12}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <label htmlFor="">Password</label>
          </Grid>
          <Grid item xs={12} sm={12}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button onClick={registerHandle} variant="contained">
              REGISTER
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
