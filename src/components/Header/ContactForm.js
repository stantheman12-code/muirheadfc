import React from "react";
import "./Forms.css"; {/* Importing Forms.css for styling of the Registration and Contact forms */}

{/* Contact Us form component - this a functional component with code that makes up the content of the Contact Form.
    The function ContactForm accepts a prop object passed from the Navigation component and returns an output to the React page */}

export default function ContactForm({ closeContactModal }) {
    return (

        <div className="modalBackground">
            <div className="modalContainer">                       
                <form class="form-container" action="" method="post">
                    <h3>Contact Form</h3>
                    <ul>
                        <li>
                            <label for="Name"><b>First Name:</b></label>
                            <input type="text" placeholder="FirstName" name="fname" required />
                        </li>
                        <li>
                            <label for="Name"><b>Last Name:</b></label>
                            <input type="text" placeholder="LastName" name="lname" required />
                        </li>
                        <li>
                            <label for="email"><b>Email:</b></label>
                            <input type="text" placeholder="Email" name="email" required />
                        </li>
                        <li>
                            <label for="message"><b>Message:</b></label>
                            <textarea id="message" name="message">Message..</textarea>
                        </li>
                    </ul>
                    <button type="submit" class="submit-button">Submit</button>
                    <button type="button" class="close-button" onClick={() => closeContactModal(false)}>Close</button> 
                    {/* Event: If the Close button is clicked, change state of the setOpenContact useState to 'false', which hides the modal form */}
                </form>
            </div>
        </div>
    );
}