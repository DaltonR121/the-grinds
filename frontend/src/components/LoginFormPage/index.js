import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const demoLogin = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({
             credential: 'Demo-User', 
             password: 'password' 
            }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <>
            <div className="loginContainer__div">
                <div className="login__container">
                    <form className="login__form" onSubmit={handleSubmit}>
                        <h1>Login To Your Account</h1>
                        <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    <div className="login__inputs">
                            <label>
                                Username or Email:
                        <input className="email__field input"
                                    type="text"
                                    value={credential}
                                    onChange={(e) => setCredential(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Password:
                        <input className="password__field input"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>
                            <button className="submit__button button" type="submit">Login</button>
                            <button className="demo__button button" onClick={demoLogin}>Demo Login</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginFormPage;
