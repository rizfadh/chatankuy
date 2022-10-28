import React from 'react';

export default function useInput(defaultValue = '') {
  const [value, setValue] = React.useState(defaultValue);
  const valueChange = (e) => setValue(e.target.value);

  return [value, valueChange];
}