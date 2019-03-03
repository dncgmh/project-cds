import React from 'react';
import PropTypes from 'prop-types';

function CertImage({ image, title }) {
  return (
    <div className='col-sm-4'>
      <div
        className='card'
        style={{ height: 'auto', width: '200px', objectFit: 'cover' }}
      >
        <img
          src={image}
          className='card-img-top'
          alt={image}
          style={{ height: '200px', width: '200px', objectFit: 'cover' }}
        />
        <div className='card-body'>
          <p className='card-title'>{title}</p>
        </div>
      </div>
    </div>
  );
}

CertImage.propTypes = {};

export default CertImage;
