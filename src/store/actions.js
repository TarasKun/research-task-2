import {
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_EMAIL,
    UPDATE_MESSAGE
} from './actionTypes';

export function addUser(user) {
    return {
        type: 'ADD_USER',
        payload: user
    };
}

export const updateFirstName = (firstName) => ({
    type: UPDATE_FIRST_NAME,
    payload: firstName
});

export const updateLastName = (lastName) => ({
    type: UPDATE_LAST_NAME,
    payload: lastName
});

export const updateEmail = (email) => ({
    type: UPDATE_EMAIL,
    payload: email
});

export const updateMessage = (message) => ({
    type: UPDATE_MESSAGE,
    payload: message
});
