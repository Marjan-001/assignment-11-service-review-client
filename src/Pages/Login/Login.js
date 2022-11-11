import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';



const Login = () => {


    const { signIn, setLoading } = useContext(AuthContext);
    const { providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;



        signIn(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }
                form.reset();

                console.log(currentUser);

                // get jwt token
                fetch('https://assignment-11-service-review-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);


                    });
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error));



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