import {combineReducers} from 'redux'
import UserReducer from './UserReducer';

const allReducers = combineReducers({
  UserReducer: UserReducer,
});

const RootReducer = (state, action) => 
{
  return allReducers(state, action);
};

export default RootReducer;

