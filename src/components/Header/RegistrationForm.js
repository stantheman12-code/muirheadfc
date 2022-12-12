import React, { useState } from 'react';

export default function RegistrationForm() {
    
    const [modal, setModal] = useState(false);

    const showForm = () => {
        setModal(!modal)
    }

    return (
        <div className="registration-modal-form">
            <button className="registration-form" onClick={showForm}></button>
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <form className="form-container" action="" method="post">
                        <h3>Member Registration Form</h3>
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
                                <input type="date" placeholder="Dob" name="dob" required/>
                            </li>

                            <li>
                                <label for="address"><b>Postal Address:</b></label>
                                <textarea id="address" placeholder="address" name="address" required>Address</textarea>
                            </li>
                        </ul>
                        <button type="submit" class="sub-button">Submit</button>
                        <button type="button" class="close-button" onclick={showForm}>Close</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
