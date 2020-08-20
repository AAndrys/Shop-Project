import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {

    const inputValueRef = useRef();

    const handlerSearchInput = () => {
        console.log(inputValueRef.current.value)
    }

    return (
        <div className="header-container">
            <header>
                <section className="top-header">
                    <div className="brand-logo">
                        <Link to='/Shop-Project/'>
                            <h1>SHOPI</h1>
                        </Link>
                    </div>
                    <div className='search-bar-header'>
                        <input type="text" ref={inputValueRef} placeholder='Wyszukaj produkt' onChange={handlerSearchInput}/>
                        <button type='submit'>Szukaj</button>
                    </div>
                    <div className="right-center">
                        <div className='user-login-center'>
                            <Link to='/account'>
                                <FontAwesomeIcon icon={faUser} size='1x'/>
                                <p>Twoje konto</p>
                            </Link>
                        </div>
                        <div className='user-register-center'>
                            <Link to='/register'>
                                <FontAwesomeIcon icon={faSignInAlt} size='1x'/>
                                <p>Zarejestruj się</p>
                            </Link>
                        </div>
                        <div className='cart-center'>
                            <Link to='/cart'>
                                <FontAwesomeIcon icon={faShoppingCart} size='1x'/>
                                <p>Koszyk</p>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="bottom-header">
                    <nav>
                        <ul>
                            <Link to='/men'><li>MĘŻCZYŹNI</li></Link>
                            <Link to='/women'><li>KOBIETY</li></Link>
                            {/* <Link to='/shoes'><li>OBUWIE</li></Link> */}
                            <Link to='/accesories'><li>AKCESORIA</li></Link>
                            {/* <Link to='/aboutus'><li>O NAS</li></Link> */}
                            <Link to='/contact'><li>KONTAKT</li></Link>
                        </ul>
                    </nav>
                </section>
            </header>
        </div>
    );
}

export default NavBar;