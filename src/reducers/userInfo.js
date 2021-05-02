import { INVALID_USER, SAVE_USER, SIGN_IN, SIGN_OUT } from "../types";

const userState = {
  email: null,
  username: null,
  isLogged: false,
  invalidUser: false,
};

const UserInfo = (state = userState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        email: action.email,
        username: action.username,
        isLogged: true,
        invalidUser: false,
      };
    case SIGN_IN:
      return {
        ...state,
        logged: true,
        invalidUser: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        logged: false,
        invalidUser: false,
      };
    case INVALID_USER:
      return {
        ...state,
        email: null,
        username: null,
        isLogged: false,
        invalidUser: true,
      };
    default:
      return state;
  }
};

export default UserInfo;
