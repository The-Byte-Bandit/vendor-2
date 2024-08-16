import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

const Dropdown = (props) => {
    // const { name, value, onChange, error } = props
  return (
    <div className="dropdown-container w-[400px]">
      <label htmlFor={name}>Select an Option:</label>
      <Select
        name={name}
        value={value}
        onChange={(selectedOption) => onChange(selectedOption.value)}
        options={options}
        placeholder="Select..."
        styles={{
          control: (provided) => ({ ...provided, borderColor: error ? 'red' : 'gray' }),
        }}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Dropdown;
