import React from 'react';

export interface IProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

function InputText({ label, value, onChange }: IProps) {
  return (
    <label>
      {label}
      <input
        type="text"
        name="title"
        value={value}
        onChange={e => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      />
    </label>
  );
}

export default InputText;
