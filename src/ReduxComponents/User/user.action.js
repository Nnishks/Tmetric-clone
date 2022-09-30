import {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESSFULL,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESSFULL,
} from "./user.types";
import axios from "axios";

export const signupAction = (creds) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_LOADING });
  try {
    let response = await axios.post("http://localhost:8080/user/signup", creds);
    // console.log(
    //   `${response.data.userKey.name}${response.data.userKey.email}${response.data.userKey.password}`
    // );
    dispatch({
      type: USER_SIGNUP_SUCCESSFULL,
      payload: `${response.data.userKey.name}${response.data.userKey.email}${response.data.userKey.password}`,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: USER_SIGNUP_ERROR,
    });
  }
};

export const loginAction = (creds) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_LOADING });
  try {
    let response = await axios.post("http://localhost:8080/user/login", creds)
    console.log("login response is", response)
    dispatch({
      type: USER_LOGIN_SUCCESSFULL,
      payload:response
    })
  } catch (err) {
    console.log(err);
    dispatch({
      type: USER_LOGIN_ERROR,
    });
  }
};
