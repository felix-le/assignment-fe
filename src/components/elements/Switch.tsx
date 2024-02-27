import React, { useState } from "react";
import { Switch } from "antd";

const SwitchComponent: React.FC = () => {
  const [isChecked, setChecked] = useState<boolean>(true);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setChecked(checked);
  };

  return (
    <Switch
      checked={isChecked}
      onChange={onChange}
      className={`
        w-[45px] h-[22px] switch-brand
      ${
        isChecked === true
          ? "switch-brand-checked"
          : "bg-transparent switch-brand-unchecked"
      }  `}
    />
  );
};

export default SwitchComponent;
