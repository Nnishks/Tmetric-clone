import {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESSFULL,
  USER_LOGOUT_SUCESS,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESSFULL,
} from "./user.types";

let token = localStorage.getItem("token") || "";
const initState = {
  loading: false,
  error: false,
  token: token,
  isAuth: false
};

export const authReducer = (state = initState, { type, payload }) => {
  console.log("payload is", payload);
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
      };
    }
    case USER_SIGNUP_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        token: payload,
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
      };
    }
    case USER_LOGIN_SUCCESSFULL: {
      // console.log(payload)
      localStorage.setItem("token", payload.token);
      console.log("working")
      return {
        ...state,
        loading: false,
        error: false,
        // token: payload.token.token,
        isAuth:true
      };
    }
    case USER_LOGOUT_SUCESS: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: false,
        token: "",
        isAuth:false
      };
    }
    default: {
      return state;
    }
  }
};
