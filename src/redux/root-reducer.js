import { combineReducers } from 'redux';

import userReducer from './user/user.reducex';

export default combineReducers({
    user: userReducer
});