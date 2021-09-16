import React from "react";
import './index.css';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/add-shirts">Add Shirts</a></li>
                <li><a href="/add-pants">Add Pants</a></li>
                <li><a href="/add-colors">Add Colors</a></li>
            </ul>
        </nav>
    )
};