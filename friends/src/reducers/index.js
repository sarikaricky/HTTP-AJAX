import { combineReducers } from 'redux';
import { GET_FRIENDS, ADD_FRIENDS } from '../actions';

const friendsReducer = (friends = [], action) => {
    switch(action.type) {
        case GET_FRIENDS:
          return action.payload.data; 
        default: 
          return friends; 
}
};

const addReducer = (friends = [], action) => {}
  switch(action.type) {
      case ADD_FRIENDS: 
        return action.payload.data;
        default: 
          return friends; 
  }
}
const rootReducer = combineReducers({
    friends: friendsReducer, addReducer
});

export default rootReducer;