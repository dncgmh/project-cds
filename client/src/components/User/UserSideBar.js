import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SidebarLink from './../commons/SidebarLink';

class SideBarUser extends Component {
  componentWillMount() {
    if (this.props.history.location.pathname === '/user')
      this.props.history.push('/user/info');
  }

  render() {
    return (
      <div className='col-md-3'>
        <ul className='list-group shadow-lg'>
          <SidebarLink to='/user/info' label='Info' />
          <SidebarLink to='/user/certs' label='Cert' />
          <SidebarLink to='/user/posts' label='Posts' />
          <SidebarLink to='/user/refs' label='Ref' />
        </ul>
      </div>
    );
  }
}
SideBarUser.propTypes = {
  user: PropTypes.object.isRequired
  // errors: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(SideBarUser);
