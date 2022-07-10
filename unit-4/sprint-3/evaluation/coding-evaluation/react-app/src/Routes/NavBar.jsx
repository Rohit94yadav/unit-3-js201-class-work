import React from 'react';
import { Link } from 'react-router-dom';

let links = [
    {
        to: '/addresses',
        title: 'Addresses'
    },
    {
        to: '/addresses/create',
        title: 'Add New Address'
    }
]

export const NavBar = () => {
    return (
        <div>
            {
                links.map(item=> <Link key={item.to} to={item.to} >{item.title}</Link>)
            }
        </div>
    )
}
