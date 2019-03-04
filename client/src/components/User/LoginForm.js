import React, { Component } from 'react';
import { login } from './user.action';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }
  render() {
    return (
      <form
        className='form-row col-7 justify-center'
        style={{ height: '35px' }}
        onSubmit={this.onSubmit}
      >
        <div className='form-group col-3'>
          <input
            type='email'
            name='email'
            className='form-control form-control-sm'
            id='staticEmail2'
            placeholder='Email'
            onChange={this.onChange}
            value={this.state.email}
          />
        </div>
        <div className='form-group col-3'>
          <input
            type='password'
            name='password'
            className='form-control form-control-sm'
            id='inputPassword2'
            placeholder='Password'
            onChange={this.onChange}
            value={this.state.password}
          />
        </div>
        <div className='form-group'>
          <button
            type='submit'
            className='btn btn-sm btn-outline-secondary'
            style={{ backgroundColor: '#419698', color: 'white' }}
          >
            Sign in
          </button>
        </div>
        <div className='form-group pt-1 pl-2'>
          <small id='emailHelp' style={{ color: 'black' }}>
            Forgot password?
          </small>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  //
};

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
