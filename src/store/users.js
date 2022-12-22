import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/index";

// Slice
const slice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    usersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = slice;
export const { usersSuccess, startLoading, hasError } = actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    await api.get("/users").then((response) => {
      dispatch(usersSuccess(response.data));
      console.log(usersSuccess(response.data));
    });
  } catch (e) {
    dispatch(hasError(e.message));
  }
};

export default reducer;
