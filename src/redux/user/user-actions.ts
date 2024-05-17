import { createAction } from "@reduxjs/toolkit";

const login = createAction("user/login");
const logout = createAction("user/logout");
const registration = createAction("user/registration");
const fetchUser = createAction("user/fetchUser");
const refresh = createAction("user/refresh");
const resetPassword = createAction("user/resetPassword");

const userActions = {
  login,
  logout,
  registration,
  fetchUser,
  refresh,
  resetPassword,
};

export default userActions;
