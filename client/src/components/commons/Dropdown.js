import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ value, onChoose }) => {
  return (
    <div className='dropdown mb-3'>
      <button
        className='btn btn-warning dropdown-toggle shadow'
        type='button'
        id='dropdownMenuButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        {value}
      </button>
      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
        <button className='dropdown-item' name='music' onClick={onChoose}>
          Music
        </button>
        <button className='dropdown-item' name='comedy' onClick={onChoose}>
          Comedy
        </button>
        <button className='dropdown-item' name='film' onClick={onChoose}>
          Film
        </button>
      </div>
    </div>
  );
};

Dropdown.propTypes = {};

export default Dropdown;
