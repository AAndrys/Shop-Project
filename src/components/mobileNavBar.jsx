import React from "react";
import { Link } from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignInAlt,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const MobileNavBar = ({ openSideMenu, userInfo }) => {
  return (
    <div className="mobile-header-container">
      <header className="mobile-header">
        <section className="top-header">
          <div className="brand-logo">
            <Link to="/Shop-Project/">
              <h1>SHOPI</h1>
            </Link>
          </div>
          <div className="right-center">
            <div className="user-login-center">
              <Link to="/account">
                <FontAwesomeIcon icon={faUser} size="1x" />
                <p>Twoje konto</p>
              </Link>
            </div>
            {!userInfo.isLogged ? (
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
        <section className="bottom-mobile-menu">
          <FontAwesomeIcon icon={faBars} onClick={openSideMenu} />
        </section>
      </header>
      {/* <div className='mobile-side-menu'>
                <div className='mobile-side-dark'></div>
                <div className='mobile-side-menu-light'>
                    <div className='mobile-side-menu-top-close'>
                        <FontAwesomeIcon icon={faTimes} size='1x' />
                    </div>
                    <nav>
                        <ul>
                            <Link to='/men'><li>MĘŻCZYŹNI</li></Link>
                            <Link to='/women'><li>KOBIETY</li></Link>
                            <Link to='/accesories'><li>AKCESORIA</li></Link>
                            <Link to='/contact'><li>KONTAKT</li></Link>
                        </ul>
                    </nav>
                </div>
            </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.UserInfo,
});

export default connect(mapStateToProps, {})(MobileNavBar);
