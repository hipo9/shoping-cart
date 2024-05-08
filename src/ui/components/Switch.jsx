import React from 'react';

// eslint-disable-next-line react/prop-types, react/display-name
export const Switch = React.memo(({ state, toggleTheme }) => {
    const handleChange = () => {
    toggleTheme();
  };

  return (
    <>
      <label className='switch'>
        <input type='checkbox' onChange={handleChange} checked={state} />
        <span></span>
      </label>
    </>
  );
});
