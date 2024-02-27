import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Checkbox } from "antd";

interface MultiRadioProps {
  values: string[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
}

const MultiRadio: React.FC<MultiRadioProps> = ({
  values,
  selectedValues,
  onChange,
}) => {
  const onCheckboxChange = (value: string) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    onChange(updatedValues);
  };

  return (
    <div className="flex justify-start items-start flex-col">
      {values.map((option, index) => (
        <Checkbox
          key={option}
          checked={selectedValues.includes(option)}
          onChange={() => onCheckboxChange(option)}
          className={`checkbox-brand text-base ant-radio-input${
            index === values.length - 1 ? "" : " mb-4"
          }`}
        >
          {option}
        </Checkbox>
      ))}
    </div>
  );
};

export default MultiRadio;
