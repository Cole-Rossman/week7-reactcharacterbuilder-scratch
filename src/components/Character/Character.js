import React from 'react';
import './Character.css';

export default function Character({ head, middle, bottom }) {
  return (
    <div className='preview'>
      <label>{head}</label>
      <label>{middle}</label>
      <label>{bottom}</label>
    </div>
  );
}