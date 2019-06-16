import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class MyRef extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    return (
      <div
        className='col-md-9 card px-0'
        style={{
          margin: 'auto'
        }}
      >
        <div
          className='card-header text-center'
          style={{ backgroundColor: '#f6f8fa' }}
        >
          <p style={{ fontSize: '21px' }}>My Ref</p>
        </div>
        <div
          className='card-body row mx-0 py-4'
          style={{ backgroundColor: 'rgb(237, 240, 243)' }}
        >
          <b className='mx-auto'>{this.props.user.user.ref}</b>
        </div>
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
)(MyRef);
