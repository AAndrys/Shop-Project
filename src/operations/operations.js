import axios from "axios";
import { SaveUser, InvalidUser } from "../actions/index";

const getUserfromApi = async (username, password) => {
  return await axios
    .post("/api/user/auth/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response);
      const { accessToken, refreshToken, success } = response.data;
      if (accessToken && refreshToken && success) return true;
      else return false;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUser = (username, password) => {
  return async (dispatch) => {
    const user = await getUserfromApi(username, password);
    if (user) {
      dispatch(SaveUser(username, user.email));
    } else {
      dispatch(InvalidUser());
    }
  };
};

const authenticateFetch = async () => {
  return await fetch("/api/user/auth/authenticate", { method: "POST" })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const authenticate = () => {
  return async (dispatch) => {
    const auth = await authenticateFetch();

    if (auth.user) {
      dispatch(SaveUser(auth.user.username, auth.user.userEmail));
    } else {
      dispatch(InvalidUser());
    }
  };
};
