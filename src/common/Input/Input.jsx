import React from 'react';
import './Input.css';

const Input = ({ labelText, placeholderText, onChange}) => {
    return (
      <div className='custom-input'>
        <label>
          {labelText}
          <br />
          <input
            placeholder={placeholderText}
            onChange={onChange}
          />
        </label>
      </div>
    );
  };
  
  export default Input;
  