import {
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_EMAIL,
    UPDATE_MESSAGE
} from './actionTypes';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case UPDATE_LAST_NAME:
            return { ...state, lastName: action.payload };
        case UPDATE_EMAIL:
            return { ...state, email: action.payload };
        case UPDATE_MESSAGE:
            return { ...state, message: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
