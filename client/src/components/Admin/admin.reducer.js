import {
  GET_POSTS_AD,
  GET_CERT_AD,
  APPROVE_POST_AD,
  APPROVE_CERT_AD
} from '../../constants';

const initialState = {
  loading: false,
  certs: [],
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_AD:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case GET_CERT_AD:
      return {
        ...state,
        loading: false,
        certs: action.payload
      };
    case APPROVE_POST_AD:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case APPROVE_CERT_AD:
      return {
        ...state,
        certs: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
