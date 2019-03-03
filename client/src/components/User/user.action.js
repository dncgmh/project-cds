import axios from 'axios';
import {
  ENDPOINT,
  SET_CURRENT_USER,
  PROFILE_LOADING,
  GET_ERROR,
  UPLOAD_CERT,
  POST_VIDEO,
  GET_POSTS,
  REGISTER,
  LOGIN
} from '../../constants';
import setAuthToken from '../../helpers/setAuthToken';
import { toast } from 'react-toastify';

export const login = ({ email, password }) => dispatch => {
  axios
    .post(`/api/auth/login`, { email, password })
    .then(res => {
      const { token, user } = res.data.data;
      localStorage.setItem('jwtToken', token.accessToken);
      setAuthToken(token.accessToken);
      dispatch(setCurrentUser(user));
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data.errors
      });
      toast.error(err.response.data.error);
    });
};

export const loginFacebook = response => dispatch => {
  axios
    .post('/api/auth/facebook', response)
    .then(res => {
      const { token, user } = res.data.data;
      localStorage.setItem('jwtToken', token.accessToken);
      setAuthToken(token.accessToken);
      dispatch(setCurrentUser(user));
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data.errors
      });
      toast.error(err.response.data.error);
    });
};

export const register = (
  { firstName, lastName, email, password },
  history
) => dispatch => {
  axios
    .post(`/api/auth/register`, { firstName, lastName, email, password })
    .then(res => {
      dispatch({
        type: REGISTER,
        payload: res.data
      });
      toast.success(res.data.message);
      setTimeout(() => {
        toast.info('Now you can login');
      }, 2100);
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data.errors
      });
    });
};

export const getCurrentUser = dispatch => {
  dispatch({ type: PROFILE_LOADING });
  axios.get('/api/auth').then(res => {
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data.data.user
    });
  });
};

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser(null));
};

export const uploadCert = ({ selfie, front, back }) => dispatch => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  };
  let formData = new FormData();
  formData.append('selfie', selfie);
  formData.append('front', front);
  formData.append('back', back);
  console.log(formData);
  axios
    .post('/api/user/cert-image', formData, config)
    .then(res => {
      dispatch({
        type: UPLOAD_CERT,
        payload: res.data
      });
      toast.success(res.data.message);
    })
    .catch(err => {
      console.log(err.response);
      toast.error(err.response.data.error);
    });
};

export const postVideo = video => dispatch => {
  axios
    .post('/api/post/post', video)
    .then(res => {
      dispatch({
        type: POST_VIDEO,
        payload: res.data
      });
      toast.success(res.data.message);
    })
    .catch(err => {
      toast.error(err.response.data.errors);
    });
};

export const getPosts = () => dispatch => {
  axios.get('/api/user/posts').then(res => {
    dispatch({
      type: GET_POSTS,
      payload: res.data.data.posts
    });
  });
};
