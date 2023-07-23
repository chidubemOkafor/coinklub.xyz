import React from "react";
import logo from "../../assets/coinKlublogo.png";
import {FiChevronDown} from "react-icons/fi"

const Navbar = () => {
    const hover = "hover:text-purple-400 cursor-pointer"
    return (
        <div className="flex gap-[15em] justify-center p-5 bg-transparent items-center">
            <div>
                <img src={logo} alt="Coin Klub Logo" />
            </div>
        <nav>
            <ul className="flex gap-[2em]">
                <li className={hover}>Home</li>
                <li className={hover}>About</li>
                <li className={hover}>Pricing</li>
                <li className="hover:text-purple-400 cursor-pointer items-center flex gap-2">Services <FiChevronDown/></li>
            </ul>
        </nav>
            <div>
                <button className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-900 p-3"> Become Our Client</button>
            </div> 
        </div>
    );
}

export default Navbar;
