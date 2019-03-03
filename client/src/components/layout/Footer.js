import React from 'react';

export default function Footer() {
  return (
    <div
      className='container-fluid pt-4 mt-4'
      style={{
        backgroundColor: '#434649',
        color: 'white',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%'
      }}
    >
      <small
        style={{ paddingLeft: '8%', fontSize: '12px', fontWeight: 'bold' }}
      >
        <a className='text-white pr-3' href>
          User Agreement
        </a>
        <a className='text-white pr-3' href>
          Privacy Policy
        </a>
        <a className='text-white pr-3' href>
          Community Guidelines
        </a>
        <a className='text-white pr-3' href>
          Cookie Policy
        </a>
        <a className='text-white pr-3' href>
          Copyright Policy
        </a>
        <a className='text-white pr-3' href>
          Guest Controls
        </a>
        <a className='text-white pr-3' href>
          Language
        </a>
      </small>
    </div>
  );
}
