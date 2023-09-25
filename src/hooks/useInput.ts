import { ChangeEvent, useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return [value, handleValueChange, setValue] as const;
}

export default useInput;
