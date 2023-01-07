import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESSFULL,
  GET_OTP_ERROR,
  GET_OTP_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESSFULL,
  USER_LOGOUT_SUCESS,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESSFULL,
} from "./user.types";

let token = localStorage.getItem("token") || "";
let otpToken = localStorage.getItem("otpToken") || "";
const initState = {
  loading: false,
  error: false,
  token: token,
  isAuth: false,
  message: "",
  isSignedUp: false,
  otpToken: otpToken,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        message: payload,
      };
    }
    case USER_SIGNUP_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        isSignedUp: true,
        message: payload.message,
      };
    }
    case USER_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        message: payload,
      };
    }
    case USER_LOGIN_SUCCESSFULL: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        message: payload,
        token: payload.token,
        isAuth: true,
      };
    }
    case USER_LOGOUT_SUCESS: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: false,
        token: "",
        isAuth: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESSFULL: {
      localStorage.setItem("otpToken", payload.token);
      return {
        ...state,
        message: payload.message,
        otpToken: payload.token,
        isAuth: true,
        error: false,
      };
    }
    case FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        error: true,
        isAuth: false,
        message: payload,
      };
    }
    case GET_OTP_SUCCESS: {
      return {
        ...state,
        message: payload,
        error: false,
        isAuth: true,
      };
    }
    case GET_OTP_ERROR: {
      return {
        ...state,
        message: payload,
        error: true,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
