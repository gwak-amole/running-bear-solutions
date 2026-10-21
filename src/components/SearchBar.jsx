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
        <div>
            <div>
                <section>
                    <input type="text" className="input" onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
                    <ul>
                        {services
                            .filter((li) => li.toLowerCase().includes(search.toLowerCase()))
                            .map((item, key) => (
                                <li key={key}>
                                    {item}
                                </li>
                            ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}