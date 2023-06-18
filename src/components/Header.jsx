// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSingOut = () =>  {
        logOut()
        .then(() => {
            console.log("singOut successfully");
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='navbar bg-base-300'>
             <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Home</Link>
             <Link className="btn btn-ghost normal-case text-xl" to={'/orders'}>Oders</Link>
             <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Login</Link>
             <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>

             {
                user ? <>
                <span>{user.email}</span>
                <button className='btn' onClick={handleSingOut}>SingOut</button>
                </> : <Link to={'/login'}>Login</Link>
             }
        </div>
    );
};

export default Header;