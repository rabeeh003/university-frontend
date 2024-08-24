"use client";

import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { useTheme } from "next-themes";

interface Course {
  id: number;
  name: string;
  icon: string;
  qualification: string;
  duration: number;
  description: string;
  url:string;
}

interface DropdownSearchProps {
  options: Course[];
  onChange: (option: Course | null) => void;
}

const DropdownSearch: React.FC<DropdownSearchProps> = ({ options, onChange }) => {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = useState<Course | null>(null);

  const handleChange = (option: Course | null) => {
    setSelectedOption(option);
    onChange(option);
  };

  const customStyles: StylesConfig<Course, false> = {
    control: (provided) => ({
      ...provided,
      borderRadius: "15px",
      backgroundColor: theme === "light" ? "#fff" : "",
      borderColor: theme === "light" ? "#ccc" : "",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === "light" ? "#fff" : "#333",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? theme === "light"
          ? "#007bff"
          : "#0056b3"
        : theme === "light"
        ? "#fff"
        : "#333",
      color: state.isSelected ? "#fff" : theme === "light" ? "#000" : "#fff",
    }),
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id.toString()}
      options={options}
      styles={customStyles}
      placeholder="Select a course..."
      isClearable
    />
  );
};

export default DropdownSearch;
