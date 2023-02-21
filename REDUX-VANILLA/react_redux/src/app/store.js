import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
store.dispatch({type: 'counter/increament'});
console.log(store.getState());
