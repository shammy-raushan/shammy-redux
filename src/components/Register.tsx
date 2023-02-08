import { Button, Grid, Typography } from "@material-ui/core";
import React, { SetStateAction, useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const navigate = useNavigate();

  function getPassword(event: { target: { value: SetStateAction<string> } }) {
    setPassword(event.target.value);
    console.log(password);
  }

  async function register() {
    let item = { name, email, password };
    console.warn(item);

    let result = await fetch("http://localhost:3000/customer", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", "JSON.stringify(result)");
    navigate("/");
  }

  return (
    <>
      <div className={styles.register}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Typography variant="h3">Create your Account</Typography>{" "}
          </Grid>
          <Grid item xs={12} sm={12}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.registerItems}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.registerItems}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={getPassword}
              className={styles.registerItems}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {/* <Button
              onClick={register}
              variant="contained"
              className={styles.registerBtn}
            >
              REGISTER
            </Button> */}
            <button onClick={register} className={styles.registerBtn}>
              Sign Up
            </button>
          </Grid>{" "}
        </Grid>
      </div>
    </>
  );
}
