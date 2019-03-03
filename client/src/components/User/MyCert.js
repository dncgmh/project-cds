import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CertImage from '../commons/CertImage';
import { Link } from 'react-router-dom';
class MyCert extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    const { image } = this.props.user.user;
    return (
      <div className='container'>
        <div
          className='card col-8 px-0'
          style={{
            margin: 'auto'
          }}
        >
          <div
            className='card-header text-center'
            style={{ backgroundColor: '#f6f8fa' }}
          >
            <p style={{ fontSize: '21px' }}>My certificate</p>
          </div>
          <div
            className='card-body row mx-0 py-4'
            style={{ backgroundColor: 'rgb(237, 240, 243)' }}
          >
            {image ? (
              <>
                <CertImage image={image.selfie} title='selfie' />
                <CertImage
                  image={image.frontIdentityCard}
                  title='frontIdentityCard'
                />
                <CertImage
                  image={image.backIdentityCard}
                  title='backIdentityCard'
                />
                <Link
                  to='/add-certificate'
                  className='btn btn-primary w-100 mt-3'
                  style={{ backgroundColor: '#419698' }}
                >
                  Update
                </Link>
              </>
            ) : (
              <>
                <div className='card-body'>
                  <p className='card-text'>
                    You have not added your certificate
                  </p>
                </div>
                <Link
                  to='/add-certificate'
                  className='btn btn-primary w-100'
                  style={{ backgroundColor: '#419698' }}
                >
                  Add Now
                </Link>
              </>
            )}
          </div>
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
)(MyCert);
