import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     navigate("/home");
  //   }
  // }, []);
  function reg1() {
    navigate("/reg");
  }
  async function login() {
    console.warn("data", email, password);
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
    navigate("/home");
  }

  return (
    <>
      <div className={styles.register}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Typography variant="h3">Login to your Account</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.registerItems}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              // onChange={setPassword}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.registerItems}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <button onClick={login} className={styles.registerBtn}>
              LOGIN
            </button>
          </Grid>{" "}
          <Grid item xs={4} sm={4}>
            <div>
              <Typography
                style={{
                  marginTop: "250px",
                }}
              >
                Don’t have an account?{" "}
              </Typography>{" "}
              <Button variant="text" onClick={reg1}>
                Sign up
              </Button>
            </div>
          </Grid>{" "}
        </Grid>
      </div>
    </>
  );
}
