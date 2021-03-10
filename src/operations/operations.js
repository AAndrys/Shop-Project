import axios from "axios";
import { SaveUser, InvalidUser } from "../actions/index";

const getUserfromApi = async (username, password) => {
  let userResponse = null;

  await axios
    .post("/user/getUser", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.length === 1) {
        userResponse = {
          email: response.data[0].userEmail,
          username: response.data[0].username,
          length: response.data.length,
        };
      } else {
        userResponse = {
          length: 0,
        };
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return userResponse;
};

export const getUser = (username, password) => {
  return async (dispatch) => {
    const user = await getUserfromApi(username, password);
    if (user.length === 1) {
      dispatch(SaveUser(user.username, user.email));
    } else {
      dispatch(InvalidUser());
    }
    // console.log(user);
  };
};
