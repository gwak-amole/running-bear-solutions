import CallButton from './CallButton.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="bg-purple-100 text-purple-950 shadow-lg shadow-purple-800 sticky top-0 z-10 px-1 sm:px-10">
            <ul className="flex flex-row justify-between p-4">
                <div className="flex flex-row gap-4 items-center">
                    <CallButton />
                    <h2>+1 915 ____</h2>
                </div>
                <ul className="flex flex-row gap-2 sm:gap-4 lg:gap-8 items-center text-md sm:text-xl">
                    <li><a className="hover:text-purple-700 transition-colors duration-300 ease-in-out" href="#home">Home</a></li>
                    <li><a className="hover:text-purple-700 transition-colors duration-300 ease-in-out" href="#services">Services</a></li>
                    <li><a className="hover:text-purple-700 transition-colors duration-300 ease-in-out" href="#about">About Us</a></li>
                    <li><a className="hover:text-purple-700 transition-colors duration-300 ease-in-out" href="#faq">FAQs</a></li>
                </ul>
            </ul>
        </nav>
    )
}

export default Navbar