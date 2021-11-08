import React from 'react'
import './Navbar1.css'
import { NavLink } from 'react-router-dom';
import {AdjustmentsIcon} from '@heroicons/react/outline'

function navbar() {
    return (
        <div className='Nav'>
            <NavLink to='/'><AdjustmentsIcon className='logo'/></NavLink>
                <NavLink to='/' exact={true} activeClassName='activeNav' className='link'>Home</NavLink>
                <NavLink to='/about' activeClassName='activeNav' className='link'>About</NavLink>
                <NavLink to='/contact' activeClassName='activeNav' className='link'>Contact</NavLink>
        </div>
    )
}

export default navbar