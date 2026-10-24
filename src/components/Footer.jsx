const Footer = () => {
    return(
        <div className="flex justify-between px-10 sm:px-20 py-20 bg-purple-100 text-purple-950 mt-10 pb-35 shadow-[0_-10px_30px_-1px_rgba(160,0,255,0.92)]">
            <div className="max-w-100 min-w-50">
                <h1 className="font-bold text-2xl mb-3">Making extermination affordable.</h1>
                <p>We don't do contracts and we serve our customers. This is placeholder text just to test what would look good here so don't read this seriously.</p>
            </div>
            <div className="flex gap-5">
                <div>
                    <h3 className="mb-3 font-semibold">Quick Links</h3>
                    <ul>
                        <li>Boom</li>
                        <li>Boom</li>
                        <li>Boom</li>
                        <li>Boom</li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-3 font-semibold">Quick Socials</h3>
                    <ul>
                        <li>Boom</li>
                        <li>Boom</li>
                        <li>Boom</li>
                        <li>Boom</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer