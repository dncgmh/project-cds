import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/commons/ScrollToTop';
import Home from './components/layout/Home';
import UploadCertForm from './components/User/UploadCertForm';
import MyCert from './components/User/MyCert';
import PrivateRoute from './components/commons/PrivateRoute';
import PostVideoForm from './components/User/PostVideoForm';
import MyPost from './components/User/MyPost';
import SidebarAdmin from './components/Admin/SidebarAdmin';
import PostBoard from './components/Admin/PostBoard';
import CertBoard from './components/Admin/CertBoard';
import PostDetail from './components/post/PostDetail';

export default () => (
  <Router>
    <ScrollToTop>
      <Header />
      <div className='container'>
        <div className='row'>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute
              exact
              path='/add-certificate'
              component={UploadCertForm}
            />
            <PrivateRoute exact path='/my-certificate' component={MyCert} />
            <PrivateRoute exact path='/my-post' component={MyPost} />
            <PrivateRoute exact path='/add-post' component={PostVideoForm} />
            <PrivateRoute path='/admin' component={SidebarAdmin} />
            <Route exact path='/posts/:id' component={PostDetail} />
          </Switch>
          <Switch>
            <PrivateRoute exact path='/admin/posts' component={PostBoard} />
            <PrivateRoute exact path='/admin/certs' component={CertBoard} />
          </Switch>
        </div>
      </div>
      <Footer />
    </ScrollToTop>
  </Router>
);
