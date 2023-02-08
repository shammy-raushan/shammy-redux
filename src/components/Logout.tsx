// import React from "react";

// const Logout = () => {
//   return (
//     <div>
//       <h1>
//         type rafce
//         <span>shammy</span>
//         <button>Logout</button>
//       </h1>
//     </div>
//   );
// };

// export default Logout;
import { SetStateAction, useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router";
import { Grid, Typography } from "@material-ui/core";

export default function Logout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

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

  function getPassword(event: { target: { value: SetStateAction<string> } }) {
    setPassword(event.target.value);
    console.log(password);
  }

  function confirmPassword(event: { target: { value: any } }) {
    let val = event.target.value;
    console.log(confirmPass);
    if (password === val) {
      console.log(confirmPass);
      setConfirmPass("matched");
      // setConfirmPass("Password matched");
    } else {
      console.log(confirmPass);
      setConfirmPass("password don't match");
    }
  }
  return (
    <>
      <div
      // className={styles.register}
      >
        <Grid container>
          <Grid item xs={12} sm={12}>
            {/* <Typography variant="h3">Create your Account</Typography>{" "} */}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // className={styles.registerItems}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // className={styles.registerItems}
          />
        </Grid>
      </div>
      <label>
        PassWord
        <input type="password" onChange={getPassword} />
      </label>

      <label>
        Confirm PassWord
        <input type="password" onChange={confirmPassword} />
      </label>
    </>

    // <div className="App">
    //   <form>
    //     <label>
    //       PassWord
    //       <input type="password" onChange={getPassword} />
    //     </label>

    //     <label>
    //       Confirm PassWord
    //       <input type="password" onChange={confirmPassword} />
    //     </label>
    //   </form>

    //   <h3> {confirmPass} </h3>
    // </div>  */}
  );
}
