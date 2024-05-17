import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `${token}`;
};
const resetAuthToken = () => {
  axios.defaults.headers.common["Authorization"] = ``;
};

export const register = createAsyncThunk(
  `auth/register`,
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, newUser);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  `auth/login`,
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, userData);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  `auth/logout`,
  async (token, thinkAPI) => {
    try {
      const response = await axios.post(`/users/logout`);
      resetAuthToken();
      return response.data;
    } catch (error) {
      thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  `auth/refresh`,
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      setAuthToken(savedToken);
      const response = await axios.get(`/users/current`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
