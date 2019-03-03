import React from 'react';
import PropTypes from 'prop-types';

const UploadImage = ({ name, value, error, onChange, onBlur }) => {
  return (
    <div className='custom-file'>
      <input
        type='file'
        className='custom-file-input'
        id='customFile'
        onChange={onChange}
        name={name}
        accept='image/*'
      />
      <label className='custom-file-label' htmlFor='customFile'>
        {(value && value.name) || 'Choose file'}
      </label>
    </div>
  );
};

UploadImage.propTypes = {};

export default UploadImage;
