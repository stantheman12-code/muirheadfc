import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import ContactForm from "./ContactForm";
import { navItems } from "./NavItems"; {/* Importing navItems variable from NavItems.js file*/}

export default function Navigation() {
    
    {/* Declaring a navList variable and passing it the value from array mapping function of navigation items
        . Item = the items defined in the NavItems.js and index = array number of item*/}
    
    const navList = navItems.map ((item, index) => <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>);
    const [openRegistration, setOpenRegistration] = useState(false);
    const [openContact, setOpenContact] = useState(false);

    return (
        <div className="NavigationSection">
            
            {/* Navigation section */}

            <div className="club-logo">
                <a className="club-logo" href="#home">
                <img src="./assets/logo1.png" alt="Muirhead FC" /></a>
            </div>
            
            <div>
                <ul>
                    <li>{navList}</li>
                    <li><a id="register" href="#null" onClick={() => {setOpenRegistration(true)}}>MEMBER REGISTRATION</a></li>
                    <li><a id="contact-us" href="#null" onClick={() => {setOpenContact(true)}}>CONTACT US</a></li>
                </ul>
                
                {openRegistration && <RegistrationForm closeRegistrationModal={ setOpenRegistration }/>}
                {openContact && <ContactForm closeContactModal={ setOpenContact }/>}
                            
                <h3 className="welcome">Welcome to the Muirhead Football Club</h3>
            </div>
            
            <div className="nav-right-align">
                <a className="nav-right-align" href="https://www.instagram.com">
                <img src="./assets/soc-media1.png" alt="Instagram" /></a>
            </div>
            
        </div>
    );
}
