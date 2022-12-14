import React from "react";
import "./Forms.css";

export default function RegistrationForm({ closeRegistrationModal }) {
    return (

    <div className="modalBackground">
        <div className="modalContainer">           
            <form class="form-container" action="" method="post">
                <h3>Registration Form</h3>
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
                        <label for="dob"><b>Date of Birth:</b></label>
                        <input type="date" placeholder="Dob" name="dob" required />
                    </li>
                    <li>
                        <label for="address"><b>Postal Address:</b></label>
                        <textarea id="address" placeholder="address" name="address" required>Address</textarea>
                    </li>
                </ul>
                <button type="submit" class="submit-button">Submit</button>
                <button type="button" class="close-button" onClick={() => closeRegistrationModal(false)}>Close</button>
            </form>
        </div>
    </div>
    );
}