import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from './user.action';
import picture from './picture.svg';
class UserBar extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  onLogout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const { user } = this.props.user;
    return (
      <div
        className='collapse navbar-collapse font_size_menu'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav ml-md-auto d-md-flex'>
          {user.role === 'admin' && (
            <Link to='/admin' className='btn btn-secondary btn-sm mr-3 my-auto'>
              Admin
            </Link>
          )}
          <div className='btn-group'>
            <button className='btn btn-secondary btn-sm' type='button'>
              <img src={picture} height='32px' />
              {` ${user.firstName} ${user.lastName}`}
            </button>
            <button
              type='button'
              className='btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <span className='sr-only'>Toggle Dropdown</span>
            </button>
            <div className='dropdown-menu'>
              <Link to='/my-certificate' className='dropdown-item'>
                My certifacte
              </Link>
              <Link to='/my-post' className='dropdown-item'>
                My post
              </Link>
              <Link
                to='/'
                className='dropdown-item'
                onClick={this.onLogout.bind(this)}
              >
                Logout
              </Link>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBar);
