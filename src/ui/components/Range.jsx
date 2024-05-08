import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const Range = ({ onChange, min, max }) => {
  const [state, setState] = useState(0);
  const handleChange = (e) => {
    const value = e.target.value;
    setState(value);
    onChange(value);
  };
  return (
    <div className='range-input'>
      <input
        type='range'
        min={min}
        max={max}
        value={state}
        id='myRange'
        onChange={handleChange}
      />
    </div>
  );
};
