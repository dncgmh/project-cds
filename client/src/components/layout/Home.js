import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from '../User/RegisterForm';
import { Redirect } from 'react-router-dom';
import Facebook from '../commons/Facebook';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    };
  }
  static propTypes = {
    prop: PropTypes
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;
    const { isAuthenticated } = this.props.user;
    return (
      <div className='container-fluid pt-4'>
        {!isAuthenticated && <RegisterForm />}
        <Facebook />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
