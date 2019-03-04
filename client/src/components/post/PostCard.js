import React from 'react';
import PropTypes from 'prop-types';
import Moment from '../commons/Moment';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className='card mb-5 mx-1 shadow-lg bg-white rounded grow col-3'>
      <iframe
        className='card-img-top image_event'
        height='150px'
        src={post.link}
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      />
      <Link to={`/posts/${post._id}`} className='card-body py-2 px-0'>
        <div className='card-title'>
          <h6 className='text-truncate overhidden'>{post.subject}</h6>
        </div>
        <div className='row'>
          <a
            href={post.link}
            className='col-8 card-subtitle mb-2 text-muted text-truncate'
          >
            {post.link}
          </a>
          <p className='col-4 card-subtitle text-right'>{post.genre}</p>
        </div>
        <div className='card-text'>
          <small className='text-muted'>
            <Moment locale='en' fromNow={true} date={post.createdAt} />
          </small>
        </div>
      </Link>
      <div
        className='card-footer py-1'
        style={{
          height: 60,
          overflow: 'hidden'
        }}
      >
        <small>{post.description}</small>
      </div>
    </div>
  );
}

PostCard.propTypes = {};

export default PostCard;
