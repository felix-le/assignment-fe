import React, { useState } from "react";
import { Button } from "antd";
import type { ConfigProviderProps } from "antd";

type SizeType = ConfigProviderProps["componentSize"];

interface ButtonComponentProps {
  buttonName: string;
  handleOnSubmit: () => void;
  size?: SizeType;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  buttonName,
  handleOnSubmit,
  size = "large" as SizeType,
}) => {
  const handleClick = () => {
    // Additional logic if needed
    handleOnSubmit();
  };
  const buttonClassName = `bg-brand-primary mt-4 hover:!bg-brand-secondary ${
    size === "large" ? "min-w-[200px] min-h-[60px]" : ""
  }`;
  return (
    <>
      <Button
        type="primary"
        className={buttonClassName}
        shape="round"
        size={size}
        onClick={handleClick}
      >
        {buttonName}
      </Button>
    </>
  );
};

export default ButtonComponent;
