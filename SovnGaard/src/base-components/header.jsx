import React, { useState } from "react";
import Reveal from "../animations/reveal";
import { motion } from "framer-motion";
import Headroom from 'react-headroom'

import '../App.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);


    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const [color, setColor] = useState(false)

    const changeColor = () =>{
        if (window.scrollY >= 90){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener['scroll', changeColor]


    return (
        <Headroom>
            
        <header className=" py-4 px-2 text-matte md:text-primary sticky top-0 md:px-20 bg-primary md:bg-transparent z-[3] flex justify-between items-center">

            <Reveal>
                <h1 className="text-xl font-bold">Mojave</h1>
            </Reveal>

            <Reveal>
                <ul className={`md:flex md:items-center absolute bg-primary md:bg-transparent text-[19px] gap-10 w-full left-0 md:w-auto md:py-0 py-4 px-2 transition-all ease-in duration-500 ${menuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"} md:opacity-100 md:top-0 md:static`}>
                    <li className="my-6 ml-4 md:my-0">
                        <a href="">kdk</a>
                    </li>
                    <li className="my-6 ml-4 md:my-0">
                        <a href="">kdk</a>
                    </li>
                    <li className="my-6 ml-4 md:my-0">
                        <a href="">kdk</a>
                    </li>
                        <button
                        className="button bg-matte md:bg-primary transition duration-500 text-primary shadow-none md:text-matte px-3 py-2 font-bold rounded-md shadow-lg">Get started
                        </button>
                    
                </ul>

                <span className="text-3xl md:hidden cursor-pointer block " onClick={toggleMenu}>
                    {menuOpen ? "X" : "☰"}
                </span>
            </Reveal>
            </header>
        </Headroom>
    );
}

export default Header;
