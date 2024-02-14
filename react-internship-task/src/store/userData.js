import { configureStore, createSlice } from "@reduxjs/toolkit";

const authorizedUserSlice = createSlice({
  name: "authorizedUser",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      state.push(action.payload);
    },
    unSetData: (state, action) => {
      return state.filter((state) => state.email !== action.payload);
    },
  },
});

const unAuthorizedUserSlice = createSlice({
  name: "unAuthorizedUser",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      state.push(action.payload);
    },
  },
});

const authorizedUserStore = configureStore({
  reducer: {
    authorizedUser: authorizedUserSlice.reducer,
    unAuthorizedUser: unAuthorizedUserSlice.reducer,
  },
});

export const authorizedUserActions = authorizedUserSlice.actions;

export const unauthorizedUserActions = unAuthorizedUserSlice.actions;

export default authorizedUserStore;
