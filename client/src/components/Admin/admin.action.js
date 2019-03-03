import axios from 'axios';
import {
  GET_POSTS_AD,
  GET_CERT_AD,
  APPROVE_POST_AD,
  APPROVE_CERT_AD
} from '../../constants';

export const getPosts = () => dispatch => {
  axios.get('/api/admin/posts').then(res =>
    dispatch({
      type: GET_POSTS_AD,
      payload: res.data.data.posts
    })
  );
};

export const getCerts = () => dispatch => {
  axios.get('/api/admin/certs').then(res =>
    dispatch({
      type: GET_CERT_AD,
      payload: res.data.data.certs
    })
  );
};

export const approvePost = body => dispatch => {
  axios.post('/api/admin/approve-post', body).then(res =>
    dispatch({
      type: APPROVE_POST_AD,
      payload: res.data.data.posts
    })
  );
};

export const approveCert = body => dispatch => {
  axios.post('/api/admin/approve-cert', body).then(res =>
    dispatch({
      type: APPROVE_CERT_AD,
      payload: res.data.data.certs
    })
  );
};
