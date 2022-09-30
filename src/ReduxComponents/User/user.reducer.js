import {
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESSFULL,
} from "./user.types";

const initState = {
  loading: false,
  error: false,
  token: "",
};

export const authReducer = (state = initState, { type, payload }) => {
  console.log("payload is", payload)
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
    default: {
      return state;
    }
  }
};
