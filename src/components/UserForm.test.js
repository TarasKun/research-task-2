import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UserForm from './UserForm';
import rootReducer from '../store/reducer';
// import '@testing-library/jest-dom/extend-expect';

const renderWithRedux = (
    component,
    { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}

describe('UserForm', () => {
    test('renders UserForm component', () => {
        renderWithRedux(<UserForm />);
        expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
    });

    test('validates email correctly', () => {
        renderWithRedux(<UserForm />);
        const emailInput = screen.getByPlaceholderText(/Email/i);

        // Test with invalid email
        fireEvent.change(emailInput, { target: { value: 'invalidEmail' } });
        expect(screen.getByText(/Invalid Email!/i)).toBeInTheDocument();

        // Test with valid email
        fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
        expect(screen.queryByText(/Invalid Email!/i)).toBeNull();
    });

    test('adds user to the store on submit', () => {
        const { store } = renderWithRedux(<UserForm />);
        const user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            message: 'Hello!'
        };

        fireEvent.change(screen.getByPlaceholderText(/First Name/i), { target: { value: user.firstName } });
        fireEvent.change(screen.getByPlaceholderText(/Last Name/i), { target: { value: user.lastName } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: user.email } });
        fireEvent.change(screen.getByPlaceholderText(/Message/i), { target: { value: user.message } });

        fireEvent.click(screen.getByText(/Submit/i));

        expect(store.getState()).toEqual([user]);
    });
});
