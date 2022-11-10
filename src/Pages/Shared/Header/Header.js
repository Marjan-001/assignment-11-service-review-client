
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/Images/logo.png'
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }


    const menuItems = <>
        <li className='font-semibold mb-4 '><Link to='/'>Home</Link></li>

        {
            user?.email ?
                <>

                    <li className='font-semibold mb-4'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <>
                    <li className='font-semibold mb-4'><Link to='/login'>Login</Link></li>
                    <li className='font-semibold mb-4 '><Link to='/signup'>SignUp</Link></li></>
        }
        <li className='font-semibold mb-4 '><Link to='/myreview'>My Review</Link></li>
        <li className='font-semibold mb-4 '><Link to='/blog'>Blog</Link></li>

    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-red-200 flex justify-between align-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mb-4 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <Link to="/" className=" normal-case text-xl mb-6">
                        <img src={logo} alt="" />

                    </Link>
                    <h3 className='font-bold text-xl font-style: italic md:text-3xl mb-4'>Glam Girl</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div >
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar  mb-4">
                    <div className='w-24 rounded-full' >
                        {user?.photoURL ?
                            <img


                                src={user?.photoURL} alt='' />

                            :
                            <FaUser></FaUser>
                        }
                    </div>
                </label>
            </div>

        </div>
    );
};

export default Header;