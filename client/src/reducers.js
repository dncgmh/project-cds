import { combineReducers } from 'redux';
import userReducer from './components/User/user.reducer';
import adminReducer from './components/Admin/admin.reducer';

export default combineReducers({
  user: userReducer,
  admin: adminReducer
});
