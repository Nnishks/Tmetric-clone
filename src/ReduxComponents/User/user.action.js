import {
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESSFULL,
} from "./user.types";
import axios from "axios";

export const signUpAction = (creds) => async (dispatch) => {
  console.log("user details from action", creds);
  await axios
    .post("http://localhost:8080/user/signup", creds)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const loginAction = (creds) => async (dispatch) => {};
