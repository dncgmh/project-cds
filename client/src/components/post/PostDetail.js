import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostDt } from './post.action';
import Moment from '../commons/Moment';
import isEmpty from '../../helpers/isEmpty';

class PostDetail extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  componentDidMount() {
    this.props.getPostDt(this.props.match.params.id);
  }
  render() {
    let { post } = this.props.post;
    console.log(post);
    if (isEmpty(post)) return <></>;
    return (
      <div className='container bg-white'>
        <iframe
          className='card-img-top image_event'
          height='400px'
          width='700px'
          src={post.link}
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />
        <h6 className='text-truncate'>{post.subject}</h6>
        {post.link}
        <br />
        <b>{post.genre}</b>
        <br />
        <small className='text-muted'>
          <Moment locale='en' fromNow={true} date={post.createdAt} />
        </small>
        <div className='py-1'>
          <p>{post.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = {
  getPostDt
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
