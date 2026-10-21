import React, { useState } from "react";
import ReactDOM from "react-dom";

const SearchBar = () => {
    const [search, setSearch] = useState(``);
    const services = [
        "Mosquitos",
        "Rats",
        "Termites"
    ]

    return (
        <div className="p-5">
            <div>
                <section className="w-full p-2">
                    <div className="flex justify-start gap-5 px-5">
                        <h1 className="text-2xl bg-purple-950 rounded-t-xl p-2 px-4 text-white">Services</h1>
                        <input type="text" className="input px-2" onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
                    </div>
                    <ul className="w-full bg-purple-950 p-10 rounded-xl text-white text-xl">
                        {services
                            .filter((li) => li.toLowerCase().includes(search.toLowerCase()))
                            .map((item, key) => (
                                <li key={key} className="">
                                    {item}
                                </li>
                            ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default SearchBar