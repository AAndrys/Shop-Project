// import { bindActionCreators } from 'redux';

const SaveUser = (username, email) => {
  return {
    type: "SAVE_USER",
    username: username,
    email: email,
  };
};
const InvalidUser = () => {
  return {
    type: "INVALID_USER",
  };
};

// const actions = bindActionCreators({ getUser })

export { SaveUser, InvalidUser };
