import React, { useState, useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Login = () => {

    const { providerLogin, signIn, setLoading } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
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
                // navigate('/');

                setLoading(true);
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


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoading(true);
                navigate(from, { replace: true });

            })
            .catch(error => setError(error.message))
            .finally(() => {
                setLoading(false);
            })
    }



    return (
        <div className="">
            <div className='bg-gray-100 w-3/5 mx-auto py-4'>
                <form onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-3/5 mx-auto justify-center items-center  py-4">
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
                    <p>Don't have an account? <Link to='/register' className='text-blue-600'>Register</Link></p>


                    <button type="submit" className="btn w-1/4 text-white">Submit</button>

                </form>
                <p className='text-center my-2 text-red-500'>{error}</p>

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

export default Login;