import React, { useState } from "react";
import SwitchModalTitle from "../elements/SwitchModalTitle";
import RadioComponent from "../elements/Radio";
import QuestionSection from "components/elements/QuestionsSection";
import CheckBoxComponent from "../elements/CheckBoxComponent";
import ButtonComponent from "../elements/ButtonComponent";

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
  const [selectedTools, setSelectedTools] = useState<string[]>(
    toolsUsedArray.map((index) => toolList[index])
  );

  const handleSubmit = () => {
    const formData = {
      isProficient,
      tools: toolList.join(", "),
      toolsUsed: selectedTools.map((tool) => toolList.indexOf(tool)).join(","),
    };
    // Handle submit logic
    console.log("Submit clicked!", formData);
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
          values={toolList}
          selectedValues={selectedTools}
          onChange={setSelectedTools}
          disabled={!isEditable}
        />
      </QuestionSection>
      <ButtonComponent
        buttonName="Process"
        handleOnSubmit={handleSubmit}
        isEditable={isEditable}
      />
    </div>
  );
};

export default Modal;
