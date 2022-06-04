import Actions from '../Constants'
import * as Storage from '../../Theme/Storage'
import { Colors } from '../../Theme';

const initialState =
{
  status: "false",

};

const UserReducer = (state = initialState, action) => 
{ 
   switch (action.type) 
   {
    case Actions.SAVE_USER: 
    return {
      ...state,
      status: action.data.status,
    };

    default: ///
    return state;
  }
};
export default UserReducer;
