import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESSFULL,
  GET_OTP_ERROR,
  GET_OTP_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESSFULL,
  USER_LOGOUT_SUCESS,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESSFULL,
} from "./user.types";
import axios from "axios";
import { base_url } from "../../actions/api";

export const signupAction = (creds) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_LOADING });
  try {
    let response = await axios.post(`${base_url}user/signup`, creds);
    return dispatch({
      type: USER_SIGNUP_SUCCESSFULL,
      payload: response.data,
    });
  } catch (err) {
    return dispatch({
      type: USER_SIGNUP_ERROR,
      payload: err.response.data.message,
    });
  }
};

export const loginAction = (creds) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_LOADING });
  try {
    let response = await axios.post(`${base_url}user/login`, creds);
    return dispatch({
      type: USER_LOGIN_SUCCESSFULL,
      payload: response.data,
    });
  } catch (err) {
    return dispatch({
      type: USER_LOGIN_ERROR,
      payload: err.response.data.message,
    });
  }
};

export const signOutAction = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT_SUCESS,
  });
};

export const forgetPasswordAction = (creds) => async (dispatch) => {
  try {
    let res = await axios.post(`${base_url}user/forgetpassword`, {
      email: creds,
    });
    return dispatch({
      type: FORGOT_PASSWORD_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: FORGOT_PASSWORD_ERROR,
      payload: err.response.data.message,
    });
  }
};

export const generateOtpAction = (creds, token) => async (dispatch) => {
  try {
    let res = await axios.post(
      `${base_url}user/otpverify`,
      {
        otp: creds,
      },
      { headers: { token: token } }
    );
    return dispatch({
      type: GET_OTP_SUCCESS,
      payload: res.data.message,
    });
  } catch (err) {
    return dispatch({
      type: GET_OTP_ERROR,
      payload: err.response.data.message,
    });
  }
};

export const resetPasswordAction = (creds, token) => async (dispatch) => {
  try {
    let res = await axios.post(
      `${base_url}user/resetpassword`,
      { password: creds },
      { headers: { token: token } }
    );
    return dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: res.data.message,
    });
  } catch (err) {
    return dispatch({
      type: RESET_PASSWORD_ERROR,
      payload: err.response.data.message,
    });
  }
};
