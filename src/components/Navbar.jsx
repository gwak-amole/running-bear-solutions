import CallButton from './CallButton.jsx'

const Navbar = () => {
    return(
        <nav className="font-sans bg-purple-100 text-purple-950 shadow-lg shadow-purple-800 sticky top-0 z-10">
            <ul className="flex flex-row justify-between p-4">
                <div className="flex flex-row gap-4 items-center">
                    <CallButton />
                    <h2>+1 915 ____</h2>
                </div>
                <ul className="flex flex-row gap-2 sm:gap-4 lg:gap-8 items-center text-md sm:text-xl">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>About Us</a></li>
                    <li><a>FAQs</a></li>
                </ul>
            </ul>
        </nav>
    )
}

export default Navbar