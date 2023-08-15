import {
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_EMAIL,
    UPDATE_MESSAGE
} from './actionTypes';

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
