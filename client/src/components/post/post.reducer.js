import { GET_POSTS_HM, GET_POST_DETAIL } from '../../constants';

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_HM:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case GET_POST_DETAIL:
      return {
        ...state,
        loading: false,
        post: action.payload
      };
    default:
      return state;
  }
}
