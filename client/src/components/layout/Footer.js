import React from 'react';

export default function Footer() {
  return (
    <div
      className='container-fluid pt-4 mt-4'
      style={{
        backgroundColor: '#434649',
        color: 'white',
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }}
    >
      <small
        style={{ paddingLeft: '8%', fontSize: '12px', fontWeight: 'bold' }}
      >
        <a className='text-white pr-3'>User Agreement</a>
        <a className='text-white pr-3'>Privacy Policy</a>
        <a className='text-white pr-3'>Community Guidelines</a>
        <a className='text-white pr-3'>Cookie Policy</a>
        <a className='text-white pr-3'>Copyright Policy</a>
        <a className='text-white pr-3'>Guest Controls</a>
        <a className='text-white pr-3'>Language</a>
      </small>
    </div>
  );
}
