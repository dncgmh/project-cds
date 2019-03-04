import Axios from 'axios';
import { GET_POSTS_HM, GET_POST_DETAIL } from '../../constants';

export const getPostsHm = () => dispatch => {
  Axios.get('/api/post').then(res => {
    dispatch({
      type: GET_POSTS_HM,
      payload: res.data.data.posts
    });
  });
};

export const getPostDt = postId => dispatch => {
  Axios.get('/api/post/' + postId).then(res => {
    dispatch({
      type: GET_POST_DETAIL,
      payload: res.data.data.post
    });
  });
};
