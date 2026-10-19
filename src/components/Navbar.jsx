import CallButton from './CallButton.jsx'

const Navbar = () => {
    return(
        <nav className="font-sans ">
            <ul className="flex flex-row justify-between p-4">
                <div className="flex flex-row gap-2 items-center">
                    <CallButton />
                    <h2>+1915____</h2>
                </div>
                <ul className="flex flex-row gap-2">
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