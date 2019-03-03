import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostsHm } from './post.action';
import PostCard from './PostCard';

class Posts extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  componentWillMount() {
    this.props.getPostsHm();
  }

  render() {
    const { posts } = this.props.post;
    console.log(posts);
    let content;
    if (posts.length)
      content = posts.map((post, id) => <PostCard post={post} key={id} />);
    console.log(posts);
    return <div className='row'>{content}</div>;
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = { getPostsHm };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
