import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from './user.action';
import { Link } from 'react-router-dom';

class MyPost extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const posts = this.props.user._posts;
    let postList;
    if (posts.length) {
      postList = posts.map((el, index) => {
        return (
          <tr key={index}>
            <th scope='row'>{index + 1}</th>
            <td>{el.link}</td>
            <td>{el.subject}</td>
            <td>{el.genre}</td>
          </tr>
        );
      });
    }
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
            <p style={{ fontSize: '21px' }}>My Post</p>
          </div>
          <div
            className='card-body row mx-0 py-4'
            style={{ backgroundColor: 'rgb(237, 240, 243)' }}
          >
            {posts ? (
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Link</th>
                    <th scope='col'>Subject</th>
                    <th scope='col'>Genre</th>
                  </tr>
                </thead>
                <tbody>{postList}</tbody>
              </table>
            ) : (
              <>
                <div className='card-body'>
                  <p className='card-text'>
                    You have not added your certificate
                  </p>
                </div>
              </>
            )}
            <Link
              to='/add-post'
              className='btn btn-primary w-100'
              style={{ backgroundColor: '#419698' }}
            >
              Add More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPost);
