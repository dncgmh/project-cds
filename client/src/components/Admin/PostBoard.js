import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts, approvePost } from './admin.action';

class PostBoard extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  componentDidMount = () => {
    this.props.getPosts();
  };

  onApprove(postId, state) {
    this.props.approvePost({ postId, state });
  }

  render() {
    const { posts } = this.props.admin;
    let content;
    if (posts.length) {
      content = posts.map((post, id) => {
        return (
          <tr key={id}>
            <td className='cs-td'>{post.userId._id}</td>
            <td className='cs-td'>{post.link}</td>
            <td className='cs-td'>{post.subject}</td>
            <td className='cs-td'>{post.genre}</td>
            <td className='cs-td'>{post.description}</td>
            <td className='cs-td'>
              <button
                type='button'
                className='btn btn-outline-success btn38 text-dark'
                onClick={() => this.onApprove(post._id, 'approved')}
              >
                <i className='fas fa-check' />
              </button>
              <button
                type='button'
                className='btn btn-outline-warning btn38 text-danger'
                onClick={() => this.onApprove(post._id, 'rejected')}
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
              <th style={{ width: '10%' }}>User Id</th>
              <th style={{ width: '20%' }}>Link</th>
              <th style={{ width: '15%' }}>Subject</th>
              <th style={{ width: '10%' }}>Genre</th>
              <th style={{ width: '20%' }}>Description</th>
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
  getPosts,
  approvePost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostBoard);
