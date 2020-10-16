import React from 'react';
import HeaderTop from '../Components/HeaderTop';
import HeaderBody from './HeaderBody';

function Header() {
    return (
        <div className = "header-container">
            <HeaderTop />
            <HeaderBody />
            <div className = "top-aligned"></div>
            <div className = "bottom-aligned"></div>
        </div>
    )
}

export default Header
