const CallButton = () => {
    return(
        <button onClick="window.location.href='tel:+19152482628'" className="bg-amber-300 border-amber-500 p-2.5 rounded-xl text-orange-900 font-bold shadow-[0_0_20px_rgba(255,220,0,0.8)] px-3 sm:px-5 hover:shadow-[0_0_20px_rgba(149,128,255,0.8)] hover:border-purple-300 hover:text-purple-600 hover:bg-amber-200 transition-colors duration-200 ease-in-out">Call Now</button>
    );
}

export default CallButton