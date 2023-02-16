const redux = require('redux');
const createStore = redux.createStore;

// actions
// action-types
const ADD_SUBSCIBER = 'ADD_SUBSCRIBER';
const addSubscriber = () => {
  return {
    type: ADD_SUBSCIBER,
  };
};

// reducers
const initialState = {
  subscribers: 365,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCIBER:
      return {
        ...state,
        subscribers: state.subscribers + 1,
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// subscribe - view
console.log(store);
