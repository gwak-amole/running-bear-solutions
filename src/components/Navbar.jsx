import CallButton from './CallButton.jsx'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    }

    return(
        <div className="sticky top-0 z-10">
            <nav className="bg-purple-100 text-purple-950 shadow-lg shadow-purple-800 px-1 md:px-10">
                <ul className="flex flex-row justify-between p-4">
                    <div className="flex flex-row gap-4 items-center text-sm md:text-lg">
                        <CallButton />
                        <h2>+1 915-248-2628</h2>
                    </div>
                    <div>
                        <button className="sm:hidden hover:cursor-pointer pt-1 text-lg" onClick={toggleMenu}>{isOpen ? "×" : "☰"}</button>
                    </div>
                    <div className="hidden! sm:flex!">
                        <ul className="gap-2 flex flex-row sm:gap-4 lg:gap-8 items-center text-sm sm:text-lg md:text-xl">
                            <li><a className="hover:text-purple-700 transition-colors duration-300 ease-in-out" href="#home">Home</a></li>
                            <li><a className="hover:text-purple-700 transition-colors duration-300 ease-in-out" href="#services">Services</a></li>
                            <li><a className="hover:text-purple-700 transition-colors duration-300 ease-in-out" href="#about">About Us</a></li>
                            <li><a className="hover:text-purple-700 transition-colors duration-300 ease-in-out" href="#faq">FAQs</a></li>
                        </ul>
                    </div>
                </ul>
            </nav>
            <ul className={`${isOpen ? "flex flex-col" : "hidden"} py-3 gap-2 sm:hidden sm:gap-4 lg:gap-8 items-center text-lg text-center bg-purple-950 text-purple-200`}>
                <li><a className="hover:text-purple-50 transition-colors duration-300 ease-in-out" href="#home">Home</a></li>
                <li><a className="hover:text-purple-50 transition-colors duration-300 ease-in-out" href="#services">Services</a></li>
                <li><a className="hover:text-purple-50 transition-colors duration-300 ease-in-out" href="#about">About Us</a></li>
                <li><a className="hover:text-purple-50 transition-colors duration-300 ease-in-out" href="#faq">FAQs</a></li>
            </ul>
        </div>
    )
}

export default Navbar