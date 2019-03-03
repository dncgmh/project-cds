import { combineReducers } from 'redux';
import userReducer from './components/User/user.reducer';
import adminReducer from './components/Admin/admin.reducer';
import postReducer from './components/post/post.reducer';

export default combineReducers({
  user: userReducer,
  post: postReducer,
  admin: adminReducer
});
