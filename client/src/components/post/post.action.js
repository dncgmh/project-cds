import Axios from 'axios';
import { GET_POSTS_HM } from '../../constants';

export const getPostsHm = () => dispatch => {
  Axios.get('/api/post').then(res => {
    dispatch({
      type: GET_POSTS_HM,
      payload: res.data.data.posts
    });
  });
};
