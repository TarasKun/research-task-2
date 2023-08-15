import { addUser } from './actions';  // Adjust the path if needed

describe('actions', () => {
    test('should create an action to add a user', () => {
        const user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            message: 'Hello!'
        };
        const expectedAction = {
            type: 'ADD_USER',
            payload: user
        };
        expect(addUser(user)).toEqual(expectedAction);
    });
});
