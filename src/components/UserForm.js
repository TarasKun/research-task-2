import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import {addUser} from '../store/actions';

const UserForm = ({ addUser, users }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [validEmail, setValidEmail] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setValidEmail(validator.isEmail(e.target.value));
    };

    const isFormValid = () => {
        return firstName && lastName && validEmail && message;
    };

    const handleSubmit = () => {
        if (isFormValid()) {
            addUser({
                firstName: firstName,
                lastName: lastName,
                email: email,
                message: message
            });

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
            <div>
                {users.map((user, index) => (
                    <div key={index}>
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <p>Email: {user.email}</p>
                        <p>Message: {user.message}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    addUser,
};

const mapStateToProps = state => {
    return {
        users: state
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
