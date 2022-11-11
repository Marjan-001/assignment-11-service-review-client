import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {



    const { createUser, updateUserProfile } = useContext(AuthContext);
    useTitle('Signup')
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                form.reset();
                handleUpdateUserProfile(name, photoURL);

            })
            .catch(e => {
                console.error(e);

            });
    }

    const handleUpdateUserProfile = (photoURL) => {
        const profile = {

            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5 text-red-600">SignUp Now!</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-rose-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="Your PhotoUrl" className="input input-bordered" />
                                </div>
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
                                    <input className="btn btn-error" type="submit" value="Sign Up" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;