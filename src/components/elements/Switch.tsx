import React, { useState } from "react";
import { Switch } from "antd";

interface IProp {
  value: boolean;
  onChange: (newValue: boolean) => void;
}

const SwitchComponent: React.FC<IProp> = ({ value, onChange }) => {
  return (
    <Switch
      checked={value}
      onChange={onChange}
      className={`
        w-[45px] h-[22px] switch-brand
      ${
        value === true
          ? "switch-brand-checked"
          : "bg-transparent switch-brand-unchecked"
      }  `}
    />
  );
};

export default SwitchComponent;
