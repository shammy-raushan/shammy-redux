import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login() {
    console.warn(name, email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:3000/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    localStorage.setItem("user-info", "JSON.stringify(result)");
    navigate("/customer");
  }
  return (
    <>
      <div className={styles.container}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <h3>LOGIN</h3>
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
              type="text"
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
            <Button variant="contained" onClick={login}>
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
function getUser() {
  throw new Error("Function not implemented.");
}
