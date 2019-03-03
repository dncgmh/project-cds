import { GET_POSTS_HM } from '../../constants';

const initialState = {
  posts: [],
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
    default:
      return state;
  }
}
