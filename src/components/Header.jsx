// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar bg-base-300'>
             <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Home</Link>
             <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Login</Link>
             <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
        </div>
    );
};

export default Header;