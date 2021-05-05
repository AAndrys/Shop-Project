import { SaveUser, InvalidUser, SignOut } from "../actions/index";

async function getUserfromApi(username, password) {
  const dataToSend = { username, password };
  const response = await fetch("/api/user/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  const data = await response.json();

  return await data;
}

export const getUser = (username, password) => {
  return async (dispatch) => {
    const user = await getUserfromApi(username, password);

    if ((await Object.values(user).length) > 2 && user.success) {
      dispatch(SaveUser(user.username, user.email));
    } else {
      dispatch(InvalidUser());
    }
  };
};

async function authenticateFetch() {
  const response = await fetch("/api/user/auth/authenticate", {
    method: "POST",
  });
  const data = await response.json();

  return await data;
}

export const authenticate = () => {
  return async (dispatch) => {
    const auth = await authenticateFetch();

    if (auth.user && auth.success) {
      dispatch(SaveUser(auth.user.username, auth.user.userEmail));
    } else {
      dispatch(SignOut());
    }
  };
};
