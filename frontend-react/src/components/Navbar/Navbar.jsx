import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { data } from "../../constants";
const Navbar = () => {
    const [Toggle, setToggle] = useState(false)
    return (
        <nav className='app__navbar'>
            <div className='app__nav-logo'>
                <img src={data.logo} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                {['home', "about", "work", "skills", "contact",].map((item) => (
                    <li className='app__flex p-text' key={'link-${item}'}>
                        <div />
                        <a href={'#${item}'}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='app_navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {
                    Toggle && (
                        <motion.div
                            whileInView={{ x: [] }}
                            transition={{ duration: 0.85, ease: "easeOut" }}

                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>


                                {['home', "about", "work", "skills", "contact",].map((item) => (
                                    <li key={{ item }}>
                                        <a href={'#${item}'} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}

                            </ul>
                        </motion.div>
                    )}

            </div>
        </nav>
    )
}

export default Navbar