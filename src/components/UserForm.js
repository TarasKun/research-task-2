import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import { updateFirstName, updateLastName, updateEmail, updateMessage } from '../store/actions';

const UserForm = ({ updateFirstName, updateLastName, updateEmail, updateMessage }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Validation states
    const [validEmail, setValidEmail] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setValidEmail(validator.isEmail(e.target.value));  // Use validator's isEmail method
    };

    const isFormValid = () => {
        return firstName && lastName && validEmail && message;
    };

    const handleSubmit = () => {
        if (isFormValid()) {
            updateFirstName(firstName);
            updateLastName(lastName);
            updateEmail(email);
            updateMessage(message);
            // Reset the form fields if needed
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            <input value={email} onChange={handleEmailChange} placeholder="Email" />
            {!validEmail && <p style={{ color: 'red' }}>Invalid Email!</p>}
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
            <button onClick={handleSubmit} disabled={!isFormValid()}>Submit</button>
        </div>
    );
}

const mapDispatchToProps = {
    updateFirstName,
    updateLastName,
    updateEmail,
    updateMessage
};

export default connect(null, mapDispatchToProps)(UserForm);
