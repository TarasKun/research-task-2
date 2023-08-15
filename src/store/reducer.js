const initialState = [];

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default rootReducer;
