import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-reducer";

// const dev = process.env.NODE_ENV === "development";

export interface ReduxStore {}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const combines = combineReducers({
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "user/logout/fulfilled") {
    state = undefined;
  }
  return combines(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);

export default store;
