import React, { useState } from "react";
import Reveal from "../animations/reveal";
import { motion } from "framer-motion";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="py-4 px-2 text-matte md:text-primary sticky top-0 md:px-20 bg-primary md:bg-transparent z-[3] flex md:flex-row justify-between items-center rounded-sm shadow-inner-lg">
            <Reveal><h1 className="text-xl font-bold">Mojave</h1></Reveal>
            
            <Reveal>
            <span className="text-3xl md:hidden cursor-pointer block mx-2" onClick={toggleMenu}>
                {menuOpen ? "X" : "☰"}
            </span></Reveal>
            
            <Reveal>
            <ul className={`md:flex md:items-center absolute bg-primary md:bg-transparent text-[19px] gap-10 w-full left-0 md:w-auto md:py-0 py-4 px-2 transition-all ease-in duration-500 ${menuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"} md:opacity-100 md:top-0 md:static`}>
                <li className="my-6 md:my-0">
                    <a href="">kdk</a>
                </li>
                <li className="my-6 md:my-0">
                    <a href="">kdk</a>
                </li>
                <li className="my-6 md:my-0">
                    <a href="">kdk</a>
                </li>
                    <button
                     className="button bg-primary transition duration-500 text-matte px-3 py-2 rounded-md shadow-lg">Get started
                     </button>
                
            </ul>
            </Reveal>
        </header>
    );
}

export default Header;
