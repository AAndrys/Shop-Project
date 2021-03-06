import React from "react";
import { Link } from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignInAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import SearchBar from "./searchBar";

const NavBar = ({ userInfo }) => {
  return (
    <div className="header-container">
      <header>
        <section className="top-header">
          <div className="brand-logo">
            <Link to="/Shop-Project/">
              <h1>SHOPI</h1>
            </Link>
          </div>
          <SearchBar />
          <div className="right-center">
            <div className="user-login-center">
              <Link to="/account">
                <FontAwesomeIcon icon={faUser} size="1x" />
                <p>Twoje konto</p>
              </Link>
            </div>
            {!userInfo.isLogged && !userInfo.username ? (
              <div className="user-register-center">
                <Link to="/register">
                  <FontAwesomeIcon icon={faSignInAlt} size="1x" />
                  <p>Zarejestruj się</p>
                </Link>
              </div>
            ) : null}
            <div className="cart-center">
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                <p>Koszyk</p>
              </Link>
            </div>
            {userInfo.isLogged && userInfo.username ? (
              <div className="user-nickname-center">
                <h1>Witaj,</h1>
                <p>
                  {userInfo.username[0].toUpperCase()}
                  {userInfo.username.slice(1, userInfo.username.length)}!
                </p>
              </div>
            ) : null}
          </div>
        </section>
        <section className="bottom-header">
          <nav>
            <ul>
              <Link to="/men">
                <li>MĘŻCZYŹNI</li>
              </Link>
              <Link to="/women">
                <li>KOBIETY</li>
              </Link>
              {/* <Link to='/shoes'><li>OBUWIE</li></Link> */}
              <Link to="/accesories">
                <li>AKCESORIA</li>
              </Link>
              {/* <Link to='/aboutus'><li>O NAS</li></Link> */}
              <Link to="/contact">
                <li>KONTAKT</li>
              </Link>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.UserInfo,
});

export default connect(mapStateToProps, {})(NavBar);
