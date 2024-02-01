import { configureStore, createSlice } from "@reduxjs/toolkit";

const showStoreSlice = createSlice({
  name: "showData",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      return action.payload;
    },
  },
});

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (store) => {
      store.fetchDone = true;
    },
    markFetchingStarted: (store) => {
      store.currentlyFetching = true;
    },
    markFetchingFinished: (store) => {
      store.currentlyFetching = false;
    },
  },
});

const showStore = configureStore({
  reducer: {
    showData: showStoreSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export const showStoreActions = showStoreSlice.actions;

export default showStore;
