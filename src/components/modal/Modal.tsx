import React, { useState } from "react";
import SwitchModalTitle from "../elements/SwitchModalTitle";
import RadioComponent from "../elements/Radio";
import QuestionSection from "components/elements/QuestionsSection";
import CheckBoxComponent from "../elements/CheckBoxComponent";
import ButtonComponent from "../elements/ButtonComponent";

const tools = ["Redux", "Lodash", "Ant design", "Webpack", "Other"];

interface ModalProps {
  toolList: string[];
  toolsUsedArray: number[];
  isProficientDefault: boolean;
}

const Modal: React.FC<ModalProps> = ({
  toolList,
  toolsUsedArray,
  isProficientDefault,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [isProficient, setIsProficient] = useState(isProficientDefault);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const handleSubmit = () => {
    // Handle submit logic
    console.log("Submit clicked!");
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <SwitchModalTitle
        title="Editable"
        value={isEditable}
        onChange={setIsEditable}
      />
      <QuestionSection question="Are you proficient in ReactJS development?">
        <RadioComponent
          disabled={!isEditable}
          value={isProficient}
          onChange={setIsProficient}
        />
      </QuestionSection>
      <QuestionSection
        question="Which tools do you use?"
        subTitle="Please select all that apply."
      >
        <CheckBoxComponent
          values={tools}
          selectedValues={selectedTools}
          onChange={setSelectedTools}
          disabled={!isEditable}
        />
      </QuestionSection>
      <ButtonComponent buttonName="Process" handleOnSubmit={handleSubmit} />
    </div>
  );
};

export default Modal;
