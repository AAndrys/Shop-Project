import React, { useRef } from "react";
import { connect } from "react-redux";
import { getUser } from "../operations/operations";

const LoginPage = ({ userInfo, getUserFromServer }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const login = (e) => {
    e.preventDefault();
    getUserFromServer(usernameRef.current.value, passwordRef.current.value);
  };

  return (
    <div className="login-container">
      <div className="login-area">
        <div className="login-page-title">
          <h1>Zaloguj się</h1>
        </div>
        <div className="login-box">
          <div className="login-main-box">
            <div className="login-main-box-title">
              <h1>Logowanie</h1>
            </div>
            <form id="loginForm">
              <label>Nazwa użytkownika</label>
              <input
                type="text"
                name="inputUsername"
                placeholder="Nazwa użytkownika"
                ref={usernameRef}
              />
              <label>Hasło</label>
              <input
                type="password"
                name="inputUsername"
                placeholder="Hasło"
                ref={passwordRef}
              />
              <button type="submit" onClick={login}>
                Zaloguj
              </button>
              {userInfo.invalidUser ? <p>Błędny login lub hasło.</p> : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.UserInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getUserFromServer: (username, password) =>
    dispatch(getUser(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
