import React from 'react';

const LoginPage = () => {

    return (
        <div className='login-container'>
            <div className='login-area'>
                <div className='login-page-title'>
                    <h1>Zaloguj się</h1>
                </div>
                <div className='login-box'>
                    <div className='login-main-box'>
                        <div className='login-main-box-title'>
                            <h1>Logowanie</h1>
                        </div>
                        <form id='loginForm'>
                            <label>Nazwa użytkownika</label>
                            <input type="text" name="inputUsername" placeholder='Nazwa użytkownika' />
                            <label>Hasło</label>
                            <input type="password" name="inputUsername" placeholder='Hasło' />
                            <button type="submit" onClick={(e) => e.preventDefault()}>Zaloguj</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;