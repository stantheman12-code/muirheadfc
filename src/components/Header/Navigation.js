import React from "react";
import { navItems } from "./NavItems"; {/* Importing navItems variable from NavItems.js file*/}

export default function Navigation() {
    
    {/* Declaring a navList variable and passing it the value from array mapping function of navigation items
        . Item = the items defined in the NavItems.js and index = array number of item*/}
    
    const navList = navItems.map ((item, index) => <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>);

    return (
        <div className="NavigationSection">
            
            {/* Navigation section */}

            <div className="club-logo">
                <a className="club-logo" href="#home">
                <img src="./assets/logo1.png" alt="Muirhead FC" /></a>
            </div>
            
            <div>
                <ul>{navList}</ul>
                <h3 className="welcome">Welcome to the Muirhead Football Club</h3>
            </div>
            
            <div className="nav-right-align">
                <a className="nav-right-align" href="https://www.instagram.com">
                <img src="./assets/soc-media1.png" alt="Instagram" /></a>
            </div>
            


        </div>
    );
}
