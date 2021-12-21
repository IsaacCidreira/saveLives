import { useState } from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
};

// interface ContextType {
//   regex: 'boolean';
//   error: string;
// }
// interface ContextTypeArray {
//   type: ContextType[];
// }

const UseForm = (type?: keyof typeof types) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<any>(null);

  function validate(value: string) {
    if (type === undefined) return true;
    console.log(types[type] && !types[type].regex.test(value));
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(e.target.value);
    setValue(e.target.value);
  }

  return {
    value,
    setValue,
    onchange,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default UseForm;
