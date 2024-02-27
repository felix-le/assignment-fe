import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";
interface CheckboxProps {
  values: string[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  disabled: boolean;
}

const CheckBoxComponent: React.FC<CheckboxProps> = ({
  values,
  selectedValues,
  onChange,
  disabled,
}) => {
  const containerRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const handleBlur = () => {
      onChange(selectedValues);
    };

    const containerElement = containerRef.current;

    if (containerElement) {
      containerElement.addEventListener("blur", handleBlur);
      return () => {
        containerElement.removeEventListener("blur", handleBlur);
      };
    }
  }, [selectedValues, onChange]);

  const onCheckboxChange = (value: string) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    onChange(updatedValues);
  };

  return (
    <div className="flex justify-start items-start flex-col">
      {values.map((option, index) => (
        <label
          key={option}
          tabIndex={0} // Allow the label to receive focus
          onBlur={() => containerRef.current?.focus()} // Keep focus within the container
          ref={containerRef}
        >
          <Checkbox
            disabled={disabled}
            checked={selectedValues.includes(option)}
            onChange={(e: CheckboxChangeEvent) => onCheckboxChange(option)}
            className="checkbox-brand text-base ant-radio-input mb-4"
          >
            {option}
          </Checkbox>
        </label>
      ))}
    </div>
  );
};

export default CheckBoxComponent;
