import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  // msg: "",
  // user: "",
  // token: "",
  // error: "",
  // loading: false,
  user: [],
  loading: false,
};

// export const signUpUser = createAsyncThunk("user", async (params) => {
//   console.log(params);
//   // const res = await fetch("http://localhost:3000/customer", {
//   const res = await fetch("http://jsonplaceholder.typicode.com/posts", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // body: JSON.stringify(body),
//     // body: { name, email, password },
//   });
//   return await res.json();
// });

export const signUpUser = createAsyncThunk("user", async () => {
  return fetch("http://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },

    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default authSlice.reducer;
