import React, { useState } from "react"; 
import RegistrationForm from "./RegistrationForm";
import ContactForm from "./ContactForm";
import { navItems } from "./NavItems";

export default function Navigation() {

{/* Importing the useState hook into this component */}
{/* Importing the other function components in */}
{/* Importing navItems variable from NavItems.js file*/}

{/* Function component for Navigation links. This component contains the code for all links of the navigation menu */}

    {/* Declaring a navList variable and passing it the values from the array mapping function of navigation items. 
        Item = the items defined in the NavItems.js and index = array number of item*/}
    
    const navList = navItems.map ((item, index) => <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>);

    {/* Initialising useStates for showing the Registration and Contact forms. Inital state is set to 'false' so that model forms are not shown. */}
    
    const [openRegistration, setOpenRegistration] = useState(false);
    const [openContact, setOpenContact] = useState(false);

    return (
        <div className="NavigationSection">
            
            <div className="club-logo">
                <a className="club-logo" href="#home">
                <img src="./assets/logo1.png" alt="Muirhead FC" /></a>
            </div>
            
            <div>
                <ul>
                    {/* Calling the navList javascript expression to create list items obtained from item properties of navList items */}
                    <li>{navList}</li> 

                    {/* onClick event for Registration and Contact Us links, the setOpen value becomes 'true', and the modal form is shown */}
                    <li><a id="register" href="#null" onClick={() => {setOpenRegistration(true)}}>MEMBER REGISTRATION</a></li>
                    <li><a id="contact-us" href="#null" onClick={() => {setOpenContact(true)}}>CONTACT US</a></li>
                </ul>
                
                {/* Inline if condition with logical && condition to change the state of the form components to 'false' in order to close the form again
                when the Close button inside the open form is clicked. The closeRegistrationModal is passed to the corresponding function componenents */}

                {openRegistration && <RegistrationForm closeRegistrationModal={setOpenRegistration}/>}
                {openContact && <ContactForm closeContactModal={setOpenContact}/>}
                            
                <h3 className="welcome">Welcome to the Muirhead Football Club</h3>
            </div>
            
            <div className="nav-right-align">
                <a className="nav-right-align" href="https://www.instagram.com">
                <img src="./assets/soc-media1.png" alt="Instagram" /></a>
            </div>
            
        </div>
    );
}
