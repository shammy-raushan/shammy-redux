import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (body: { name?: any; email?: any; password?: any }) => {
    console.log({ body });
    return fetch("http://localhost:3000/customer").then((res) =>
      // https://jsonplaceholder.typicode.com/posts
      res.json()
    );
  }
);
export const postSlice = createSlice({
  name: "posts",
  initialState: { user: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    // Set SSO authentication
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default postSlice.reducer;
