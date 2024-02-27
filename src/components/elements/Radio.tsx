import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

interface RadioComponentProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const RadioComponent: React.FC<RadioComponentProps> = ({ value, onChange }) => {
  const [radioValue, setRadioValue] = useState(value ? "Yes" : "No");

  const onRadioChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value === "Yes";
    setRadioValue(e.target.value);
    onChange(newValue);
  };

  return (
    <Radio.Group
      onChange={onRadioChange}
      value={radioValue}
      className="flex justify-start items-start flex-col"
    >
      {["No", "Yes"].map((option, index) => (
        <Radio
          key={option}
          value={option}
          className={`radio-brand text-base${index === 0 ? " mb-4" : ""}${
            radioValue === option ? "" : " text-gray-light"
          }`}
        >
          {option}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioComponent;
