import { combineReducers, configureStore } from "@reduxjs/toolkit";
import directSlice from "./reducers/directSlice";
import postsCardSlice from "./reducers/postsCardSlice";



const rootReduser = combineReducers({
  postsCard: postsCardSlice,
  direct: directSlice,
})

export const setupStore = () => configureStore({
  reducer: rootReduser,
})