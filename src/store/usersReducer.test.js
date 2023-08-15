import rootReducer from './reducer';  // Adjust the path if needed

describe('usersReducer', () => {
    test('should return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual([]);
    });

    test('should handle ADD_USER', () => {
        const user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            message: 'Hello!'
        };
        expect(
            rootReducer([], {
                type: 'ADD_USER',
                payload: user
            })
        ).toEqual([user]);
    });
});
