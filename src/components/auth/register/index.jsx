import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';
import './register.css'; // Import the register.css file

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { userLoggedIn } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(email, password);
        }
    };

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="main-container">
                <div className="form-container">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                        </div>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="input-field"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="input-field"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Confirm Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                className="input-field"
                            />
                        </div>

                        {errorMessage && (
                            <span className='error-message'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`submit-button ${isRegistering ? 'disabled' : ''}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="sign-in-link">
                            Already have an account? {'   '}
                            <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Register;
