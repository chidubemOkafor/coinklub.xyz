import React from "react";
import logo from "./assets/coinKlublogo.png";
import Image from 'next/image';
import {FiChevronDown} from "react-icons/fi"

const Navbar = () => {
    const hover = "hover:text-purple-400 cursor-pointer"
    return (
        <>
        <div className="flex flex-col ">
            <div className="h-[10px] w-full"/>
        <div className="flex justify-between py-5 items-center">
            <Image src={logo} alt="Coin Klub Logo" width={120} height={100} className="pointer"/>
            <ul className="flex gap-[2em]">
                <li className={hover}>Home</li>
                <li className={hover}>About</li>
                <li className={hover}>Pricing</li>
                <li className="hover:text-purple-400 cursor-pointer items-center flex gap-2">Services <FiChevronDown/></li>
                <li className="hover:text-purple-400 cursor-pointer items-center flex gap-2">Community <FiChevronDown/></li>
            </ul>
            <button className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-900 p-3"> Become Our Client</button>
        </div>
        </div>
        </>
    );
}

export default Navbar;
