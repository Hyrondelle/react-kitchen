import React from 'react';
import { NavLink } from 'react-router-dom';


const navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to='/'>
                <span>Home</span>
            </NavLink>
        </div>
    );
};

export default navigation;