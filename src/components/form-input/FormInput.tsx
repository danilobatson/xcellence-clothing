import React from 'react';

import './form-input.styles.scss';

interface FormInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  name: string;
  type: string;
  required: boolean;
}
const FormInput: React.FC<FormInputProps> = ({
  
  label,
  ...otherProps
}) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
