import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../User/LoginForm';
import UserBar from '../User/UserBar';
import Facebook from '../commons/Facebook';

class Header extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    const { isAuthenticated } = this.props.user;
    console.log(isAuthenticated);
    return (
      <nav
        className='navbar navbar-expand-lg navbar-dark'
        style={{ backgroundColor: '#c1cad0' }}
      >
        <Link to='/' className='navbar-brand col-5' style={{ height: '35px' }}>
          Project CDS
        </Link>
        {isAuthenticated ? <UserBar /> : <LoginForm />}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
