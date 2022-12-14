import React from "react";
import "./Forms.css";

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
                </form>
        </div>
    </div>
    );
}