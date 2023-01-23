import React from 'react';

function Nav () {
    const categories = [
        {
            name: "Releases",
            description: "All releases"
        },
        {name: "Gallery", description: "All Transylvanian artwork/logos and their artists"},
        
    ];

    function categorySelected() {
        console.log("hello")
    }
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label=""></span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                        className="mx-1"
                        key={category.name}
                        >
                            <span onClick={categorySelected}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;