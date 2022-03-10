import React from 'react';
import './Preview.css';

export default function Preview({ head, middle, bottom, catchphrase }) {
  return (
    <div className='preview'>
      <label>{head}</label>
      <label>{middle}</label>
      <label>{bottom}</label>
      <label>{catchphrase}</label>
    </div>
  );
}