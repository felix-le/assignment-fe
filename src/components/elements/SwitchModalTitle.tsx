import React from "react";
import Switch from "./Switch"; // Make sure to adjust the import path based on your project structure

interface Props {
  title: string;
  value: boolean;
  onChange: (newValue: boolean) => void;
}

const SwitchModalTitle: React.FC<Props> = ({ title, value, onChange }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h4>{title}</h4>
      <Switch value={value} onChange={onChange} />
    </div>
  );
};

export default SwitchModalTitle;
