const initialState = [];

function rootReducer(state = initialState, action) {
    if (action.type === 'ADD_USER') {
        return [...state, action.payload];
    }
    return state;
}

export default rootReducer;
