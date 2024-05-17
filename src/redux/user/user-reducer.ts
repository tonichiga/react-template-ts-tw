import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: "idle",
};

const userReducer = createReducer(initialState, (builder) => {});

export default userReducer;
