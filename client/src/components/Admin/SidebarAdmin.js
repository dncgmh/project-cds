import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SidebarLink from './../commons/SidebarLink';

class SideBarAdmin extends Component {
  componentWillMount() {
    if (this.props.user.user.role !== 'admin') this.props.history.push('/');
  }
  componentWillUpdate() {
    if (this.props.history.location.pathname === '/admin')
      this.props.history.push('/admin/dashboard');
  }
  render() {
    return (
      <div className='col-md-3'>
        <ul className='list-group shadow-lg'>
          <SidebarLink to='/admin/dashboard' label='DashBoard' />
          <SidebarLink to='/admin/users' label='Users' />
          <SidebarLink to='/admin/certs' label='User Cert' />
          <SidebarLink to='/admin/posts' label='Posts' />
        </ul>
      </div>
    );
  }
}
SideBarAdmin.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(SideBarAdmin);
