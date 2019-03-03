import {
  SET_CURRENT_USER,
  PROFILE_LOADING,
  GET_POSTS,
  UPLOAD_CERT,
  POST_VIDEO,
  REGISTER
} from '../../constants';

const initialState = {
  isAuthenticated: false,
  loading: false,
  message: '',
  user: {},
  _posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.payload,
        loading: false,
        user: action.payload
      };
    case PROFILE_LOADING:
      return {
        ...state,
        message: '',
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        _posts: action.payload,
        loading: false
      };
    case UPLOAD_CERT:
      return {
        ...state,
        loading: false,
        user: action.payload.data.user,
        message: action.payload.message
      };
    case POST_VIDEO:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      };
    default:
      return state;
  }
}
