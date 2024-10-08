"use client";

import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { useTheme } from 'next-themes';

interface DropdownSearchProps {
  options: Array<{ id: number; name: string }>;
  onChange: (option: { id: number; name: string }) => void;
}

const DropdownSearch: React.FC<DropdownSearchProps> = ({ options, onChange }) => {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = useState<{ id: number; name: string } | null>(null);

  const handleChange = (option: any) => {
    setSelectedOption(option);
    onChange(option);
  };

  const customStyles: StylesConfig<{ id: number; name: string }, false> = {
    control: (provided) => ({
      ...provided,
      borderRadius: '15px',
      backgroundColor: theme == 'light' ? '#fff' : '#020817',
      borderColor: theme === 'light' ? '#ccc' : '',
      color: theme == 'light' ? '#000' : 'white',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme == 'light' ? '#000' : 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? (theme == 'light' ? '#007bff' : '#0056b3') : theme == 'light' ? '#fff' : '#333',
      color: state.isSelected ? '#fff' : theme == 'light' ? '#000' : 'white',
    }),
  };

  return (
    <Select
      value={selectedOption}
      className='sm:max-w-[300px] w-full rounded-2xl'
      onChange={handleChange}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id.toString()}
      options={options}
      styles={customStyles}
      placeholder="Select a college..."
      isClearable
    />
  );
};

export default DropdownSearch;
