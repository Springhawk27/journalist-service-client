import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <header className="body-font bg-gray-100  sticky top-0 z-10" >
            {/* className={`body-font bg-gray-100  sticky top-0 z-10 ${theme === true ? "bg-gray-100" : theme === false ? "bg-blue-300" : "bg-red-100"}`} */}
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center  mb-4 md:mb-0">

                    <img src={logo} alt="" style={{ width: '120px' }} />


                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link

                        to="/"
                        className="mr-5 hover:text-blue-900">Home</Link>
                    <Link

                        to="/services"
                        className="mr-5 hover:text-blue-900">Services</Link>

                    <Link

                        to="/blog"
                        className="mr-5 hover:text-blue-900">Blog</Link>

                    <div className="flex flex-wrap gap-2">

                        {/* <div>
                            <Button
                                color="light"
                                pill={true}
                                onClick={() => {
                                    setTheme(theme === false ? true : theme === true ? false : true)
                                }}
                            >
                                Theme
                            </Button>
                        </div> */}
                    </div>



                    {/* <>
                        {
                            user?.uid ?
                                <>
                                    <span className='mr-4 sm:ml-12 ml-4'>{user?.displayName}</span>
                                    <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                </>
                                :
                                <>
                                    <Link
                                        to='/login'
                                        className="mr-2 "
                                    >Login</Link>
                                    <Link to='/register'
                                        className="mr-2 "
                                    >Register</Link>
                                </>
                        }
                    </> */}
                    {/* 
                    <Tooltip
                        content={user?.displayName ? `Hello, ${user?.displayName} ` : "Hello"}
                        animation="duration-500"
                        placement="left"
                    >
                        <Link to="/profile">
                            {user?.photoURL ?
                                <img
                                    className="ml-4 h-8 w-8 rounded-full shadow-lg"
                                    src={user?.photoURL}
                                    alt="profile">
                                </img>

                                : <FaUser></FaUser>
                            }
                        </Link>
                    </Tooltip> */}
                </nav>


            </div>
        </header>
    );
};

export default Header;