import React from "react";
import { Link } from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MobileNavBar = ({ openSideMenu }) => {
  // const inputValueRef = useRef();

  // const handlerSearchInput = () => {
  //     console.log(inputValueRef.current.value)
  // }
  // const run = () => {
  //     console.log('working')
  // }

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
            <div className="user-register-center">
              <Link to="/register">
                <FontAwesomeIcon icon={faSignInAlt} size="1x" />
                <p>Zarejestruj się</p>
              </Link>
            </div>
            <div className="cart-center">
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                <p>Koszyk</p>
              </Link>
            </div>
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

export default MobileNavBar;
