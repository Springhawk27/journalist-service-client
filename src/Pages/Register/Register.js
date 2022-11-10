import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, providerLogin, setLoading } = useContext(AuthContext);


    const googleProvider = new GoogleAuthProvider()


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();


                handleUpdateUserProfile(name, photoURL);

                setLoading(true);
                navigate(from, { replace: true });



            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));

    }


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                setLoading(true)
                navigate(from, { replace: true });


            })
            .catch(error => setError(error.message))
            .finally(() => {
                setLoading(false);
            })
    }



    return (
        <div>
            <div className='bg-gray-100 w-3/5 mx-auto py-4'>
                <form onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-3/5 mx-auto justify-center items-center  py-4">
                    <div>
                        <div className="mb-2 block">
                            <label
                                htmlFor="name"
                                value="Full Name"
                            />
                        </div>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter Your Full Name"
                            required={true}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <label
                                htmlFor="photoURL"
                                value="Photo URL"
                            />
                        </div>

                        <input id='photoURL' type="text" placeholder="Enter Your Photo URL" className="input input-bordered w-full max-w-xs"
                            required={true}
                        />

                    </div>
                    <div>
                        <div className="mb-2 block">
                            <label
                                htmlFor="email"
                                value="Your email"
                            />
                        </div>

                        <input id='email' type="email" placeholder="name@mail.com" className="input input-bordered w-full max-w-xs"
                            required={true}
                        />

                    </div>
                    <div>
                        <div className="mb-2 block">
                            <label
                                htmlFor="password"
                                value="Your password"
                            />
                        </div>

                        <input id='password' type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs"
                            required={true}
                        />
                    </div>
                    <p>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>

                    <button type="submit" className="btn w-1/4 text-white">Submit</button>
                    <p className="text-red-500 d-block my-2">
                        {error}
                    </p>
                </form>
                <p className='text-center my-4'>Or try</p>

                <div className='flex flex-col justify-center items-center  mt-4'>
                    <p>

                        <button className="btn btn-outline btn-info mb-2"><FaGoogle className='mr-2 '></FaGoogle> Log In With Google</button>

                    </p>

                </div>
            </div>
        </div>
    );
};

export default Register;