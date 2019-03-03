import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropdown from '../commons/Dropdown';
import { postVideo } from './user.action';
import DataTransfer from 'fbjs/lib/DataTransfer';

class PostVideoForm extends Component {
  constructor() {
    super();
    this.state = {
      link: '',
      subject: '',
      genre: 'music',
      description: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChoose = this.onChoose.bind(this);
    this.onPaste = this.onPaste.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChoose(e) {
    console.log(e.target.name);
    this.setState({ genre: e.target.name });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.postVideo(this.state);
  }
  onPaste(e) {
    console.log('get');
    const clipdata = e.clipboardData || window.clipboardData;
    console.log(clipdata.getData('text/plain'));
  }
  static propTypes = {
    // prop: PropTypes
  };

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
            <p style={{ fontSize: '21px' }}>
              Share your favorite videos to everyone
            </p>
            <p style={{ fontSize: '16px' }}>And enjoy them together.</p>
          </div>
          <form
            className='card-body'
            style={{ backgroundColor: '#edf0f3' }}
            onSubmit={this.onSubmit}
          >
            <label>Link</label>
            {/* <div className='input-group mb-3'> */}
            <input
              type='text'
              name='link'
              className='form-control form-control-sm'
              onChange={this.onChange}
              value={this.state.link}
            />
            {/* <div className='input-group-append'>
                <button
                  className='btn btn-outline-secondary btn-sm'
                  type='button'
                  id='button-addon2'
                  onClick={this.onPaste}
                >
                  <i className='fas fa-paste' />
                </button>
              </div>
            </div> */}

            <label>Subject</label>
            <input
              type='text'
              name='subject'
              className='form-control form-control-sm'
              onChange={this.onChange}
              value={this.state.subject}
            />
            <label>Genre</label>
            <Dropdown
              name='genre'
              onChoose={this.onChoose}
              value={this.state.genre}
            />
            <label>Description (6 or more characters)</label>
            <input
              type='text'
              name='description'
              className='form-control form-control-sm'
              onChange={this.onChange}
              value={this.state.description}
            />

            <button
              type='submit'
              className='btn btn-primary w-100 mt-3'
              style={{ backgroundColor: '#419698' }}
            >
              Post
            </button>
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
  postVideo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostVideoForm);
