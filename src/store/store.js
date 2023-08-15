import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__?.()  // Enables Redux DevTools extension if available
);

export default store;
