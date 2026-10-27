const Footer = () => {
    return(
        <div className="flex justify-between px-10 sm:px-15 md:px-20 py-20 bg-purple-100 text-purple-950 mt-10 pb-35 shadow-[0_-10px_30px_-1px_rgba(160,0,255,0.92)]">
            <div className="w-60 sm:w-80 md:w-100 min-w-50">
                <h1 className="font-bold text-2xl mb-3">Making extermination affordable.</h1>
                <p className="text-sm sm:text-lg lg:text-lg">High quality pest control you can afford. No contracts. Just dependable pest control when you need it. Regular treatment for common pests is typically $50 for most homes. I service El Paso County (Texas) and Doña Ana County (New Mexico).</p>
            </div>
            <div className="flex gap-5 text-sm md:text-lg">
                <div>
                    <h3 className="mb-3 font-semibold">Quick Links</h3>
                    <ul>
                        <li><a className="underline text-purple-700" href="#home">Home</a></li>
                        <li><a className="underline text-purple-700" href="#services">Services</a></li>
                        <li><a className="underline text-purple-700" href="#about">About</a></li>
                        <li><a className="underline text-purple-700" href="#faq">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-3 font-semibold">Socials</h3>
                    <ul>
                        <li><a className="underline text-purple-700" target="_blank" href="https://www.instagram.com/runningbearpestcontrol/">Instagram</a></li>
                        <li><a className="underline text-purple-700" href="mailto:dale@runningbearsolutions.com">Email</a></li>
                        <li><a className="underline text-purple-700" target="_blank" href="https://www.yelp.com/biz/running-bear-pest-control-el-paso">Yelp</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer