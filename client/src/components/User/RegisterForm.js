import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from './user.action';

export class RegisterForm extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.message)
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.register(this.state, this.props.history);
  }

  render() {
    return (
      <div className='container'>
        <div
          className='card w-50 col-5 px-0'
          style={{
            margin: 'auto'
          }}
        >
          <div
            className='card-header text-center'
            style={{ backgroundColor: '#f6f8fa' }}
          >
            <p style={{ fontSize: '21px' }}>Be great at what you do</p>
            <p style={{ fontSize: '16px' }}>Get started - it's free.</p>
          </div>
          <form
            className='card-body'
            style={{ backgroundColor: '#edf0f3' }}
            onSubmit={this.onSubmit}
          >
            <label>First name</label>
            <input
              type='text'
              name='firstName'
              className='form-control form-control-sm'
              onChange={this.onChange}
              value={this.state.firstName}
            />
            <label>Last name</label>
            <input
              type='text'
              name='lastName'
              className='form-control form-control-sm'
              onChange={this.onChange}
              value={this.state.lastName}
            />
            <label>Email</label>
            <input
              type='email'
              name='email'
              className='form-control form-control-sm'
              onChange={this.onChange}
              value={this.state.email}
            />
            <label>Password (6 or more characters)</label>
            <input
              type='password'
              name='password'
              className='form-control form-control-sm'
              onChange={this.onChange}
              value={this.state.password}
            />
            <small className='text-muted'>
              By clicking Join now, you agree to the
              <a className='text-muted' href>
                LinkedIn User Agreement
              </a>
              ,
              <a className='text-muted' href>
                Privacy Policy
              </a>
              ,
              <a className='text-muted' href>
                Cookie Policy
              </a>
              .
            </small>
            <p>
              <button
                type='submit'
                className='btn btn-primary w-100'
                style={{ backgroundColor: '#419698' }}
              >
                Join now
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
