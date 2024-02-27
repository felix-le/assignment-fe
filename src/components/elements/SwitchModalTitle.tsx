import React from "react";
import Switch from "./Switch"; // Make sure to adjust the import path based on your project structure

interface Props {
  title: string;
}

const SwitchModalTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h4>{title}</h4>
      <Switch />
    </div>
  );
};

export default SwitchModalTitle;
