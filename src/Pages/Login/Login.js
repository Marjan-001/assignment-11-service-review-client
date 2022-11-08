import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';



const Login = () => {

    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const { providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {

        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
        navigate(from, { replace: true });
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5 text-center text-red-600">Login!</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-rose-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="card-body">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-error" type="submit" value="Login" />
                                </div>
                                <input onClick={handleGoogleSignIn} className='btn btn-error' type="submit" value="Login with Google" />


                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;