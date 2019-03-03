import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { logout, getCurrentUser } from '../components/User/user.action';

axios.defaults.baseURL = 'https://project-cds.herokuapp.com/';

const getAuth = store => {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    localStorage.setItem('expiresAt', decoded.exp);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    } else {
      getCurrentUser(store.dispatch);
    }
  }
};
export default getAuth;
