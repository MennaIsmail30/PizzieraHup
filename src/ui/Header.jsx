// import React from 'react'

import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
    return (
        <header className="bg-yellow-500 flex items-center justify-around py-3 px-4 uppercase border-b border-stone-500 sm:px-6">
            <Link to="/" className="tracking-widest">
                Fast Pizza Co.
            </Link>
            <SearchOrder />
            <UserName />
        </header>
    );
}

export default Header;
