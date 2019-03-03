import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Routers from './Routers';
import getAuth from './helpers/getAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

getAuth(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
        <ToastContainer autoClose={2000} />
      </Provider>
    );
  }
}

export default App;
