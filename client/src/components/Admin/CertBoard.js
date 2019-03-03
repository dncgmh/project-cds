import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCerts, approveCert } from './admin.action';

class CertBoard extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  componentDidMount = () => {
    this.props.getCerts();
  };

  onApprove(userId, state) {
    this.props.approveCert({ userId, state });
  }

  render() {
    const { certs } = this.props.admin;
    let content;
    if (certs.length) {
      content = certs.map((cert, id) => {
        if (cert.image)
          return (
            <tr key={id}>
              <td className='cs-td'>{cert._id}</td>
              <td className='cs-td'>
                <img className='cs-img' src={`/${cert.image.selfie}`} />
              </td>
              <td className='cs-td'>
                <img
                  className='cs-img'
                  src={`/${cert.image.frontIdentityCard}`}
                />
              </td>
              <td className='cs-td'>
                <img
                  className='cs-img'
                  src={`/${cert.image.backIdentityCard}`}
                />
              </td>
              <td className='cs-td'>
                <button
                  type='button'
                  className='btn btn-outline-success btn38 text-dark'
                  onClick={() => this.onApprove(cert._id, 'approved')}
                >
                  <i className='fas fa-check' />
                </button>
                <button
                  type='button'
                  className='btn btn-outline-warning btn38 text-danger'
                  onClick={() => this.onApprove(cert._id, 'rejected')}
                >
                  <i className='fas fa-times' />
                </button>
              </td>
            </tr>
          );
      });
    }
    return (
      <div className='col-md-9 ts-col py-3 bg-white'>
        <table className='table table-responsive d-md-table shadow-sm'>
          <thead className='thead-inverse detail-table'>
            <tr>
              <th style={{ width: '15%' }}>User Id</th>
              <th style={{ width: '20%' }}>Selfie</th>
              <th style={{ width: '20%' }}>Front</th>
              <th style={{ width: '20%' }}>Back</th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  admin: state.admin
});

const mapDispatchToProps = {
  getCerts,
  approveCert
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CertBoard);
