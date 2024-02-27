import React, { useState } from "react";
import { Button } from "antd";
import type { ConfigProviderProps } from "antd";

type SizeType = ConfigProviderProps["componentSize"];

interface ButtonComponentProps {
  buttonName: string;
  handleOnSubmit: () => void;
  size?: SizeType;
  isEditable?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  buttonName,
  handleOnSubmit,
  isEditable,
  size = "large" as SizeType,
}) => {
  const handleClick = () => {
    // Additional logic if needed
    handleOnSubmit();
  };

  const buttonClassName = `bg-brand-primary mt-4 hover:!bg-brand-secondary ${
    size === "large" ? "min-w-[200px] min-h-[60px]" : ""
  } ${!isEditable ? "cursor-not-allowed" : ""}`;

  return (
    <>
      <Button
        type="primary"
        className={buttonClassName}
        shape="round"
        size={size}
        onClick={handleClick}
        disabled={!isEditable}
      >
        {buttonName}
      </Button>
    </>
  );
};

export default ButtonComponent;
