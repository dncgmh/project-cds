import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UploadImage from '../commons/UploadImage';
import { uploadCert } from './user.action';
import isEmpty from '../../helpers/isEmpty';

class UploadCertForm extends Component {
  constructor() {
    super();
    this.state = {
      selfie: null,
      front: null,
      back: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  static propTypes = {
    // prop: PropTypes
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.files[0]
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.uploadCert(this.state);
  }
  render() {
    const { image } = this.props.user.user;
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
            <p style={{ fontSize: '21px' }}>
              Upload your identification information
            </p>
            <p style={{ fontSize: '16px' }}>Let us can understand you more.</p>
          </div>
          <form
            className='card-body'
            style={{ backgroundColor: '#edf0f3' }}
            onSubmit={this.onSubmit}
          >
            <label>Selfie</label>
            <UploadImage
              name='selfie'
              value={this.state.selfie}
              onChange={this.onChange}
            />
            <label>Front of identity card</label>
            <UploadImage
              name='front'
              value={this.state.front}
              onChange={this.onChange}
            />
            <label>Back of identity card</label>
            <UploadImage
              name='back'
              value={this.state.back}
              onChange={this.onChange}
            />
            <p>
              <button
                type='submit'
                className='btn btn-primary w-100 mt-2'
                style={{ backgroundColor: '#419698' }}
              >
                {isEmpty(image) ? 'Upload' : 'Update'}
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  uploadCert
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadCertForm);
