import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class MyInfo extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    const { user } = this.props.user;
    return (
      <div className='col-md-9 bg-white py-2 rounded'>
        <form className='needs-validation' noValidate>
          <div className='form-row'>
            <div className='col-md-5 mb-3'>
              <label htmlFor='validationTooltip01'>First name</label>
              <input
                type='text'
                className='form-control'
                id='validationTooltip01'
                placeholder='First name'
                defaultValue={user.firstName}
                disabled
              />
              <div className='valid-tooltip'>Looks good!</div>
            </div>
            <div className='col-md-5 mb-3'>
              <label htmlFor='validationTooltip02'>Last name</label>
              <input
                type='text'
                className='form-control'
                id='validationTooltip02'
                placeholder='Last name'
                defaultValue={user.lastName}
                disabled
              />
              <div className='valid-tooltip'>Looks good!</div>
            </div>
            <div className='col-md-5 mb-3'>
              <label htmlFor='validationTooltipUsername'>Email</label>
              <div className='input-group'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text'
                    id='validationTooltipUsernamePrepend'
                  >
                    @
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  id='validationTooltipUsername'
                  value={user.email}
                  aria-describedby='validationTooltipUsernamePrepend'
                  disabled
                />
                <div className='invalid-tooltip'>
                  Please choose a unique and valid username.
                </div>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-6 mb-3'>
              <label htmlFor='validationTooltip03'>Ref</label>
              <input
                type='text'
                className='form-control'
                id='validationTooltip03'
                placeholder='ref'
                required
              />
            </div>
          </div>
          <button type='submit' className='btn btn-primary mb-2 btn-sm'>
            Confirm ref
          </button>
          {/* <button className='btn btn-primary' type='submit'>
            Submit form
          </button> */}
        </form>
      </div>
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
)(MyInfo);
