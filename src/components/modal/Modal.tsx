import React, { useState } from "react";
import SwitchModalTitle from "../elements/SwitchModalTitle";
import RadioComponent from "../elements/Radio";
import QuestionSection from "components/elements/QuestionsSection";
import CheckBoxComponent from "../elements/CheckBoxComponent";
import ButtonComponent from "../elements/ButtonComponent";

const tools = ["Redux", "Lodash", "Ant design", "Webpack", "Other"];

function Modal() {
  const [isYesSelected, setIsYesSelected] = useState(false);

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleRadiosChange = (newValues: string[]) => {
    setSelectedValues(newValues);
  };

  const handleRadioChange = (value: boolean) => {
    setIsYesSelected(value);
  };

  const handleSubmit = () => {
    // Handle submit logic
    console.log("Submit clicked!");
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <SwitchModalTitle title="Editable" />
      <QuestionSection question="Are you proficient in ReactJS development?">
        <RadioComponent value={isYesSelected} onChange={handleRadioChange} />
      </QuestionSection>
      <QuestionSection
        question="Which tools do you use?"
        subTitle="Please select all that apply."
      >
        <CheckBoxComponent
          values={tools}
          selectedValues={selectedValues}
          onChange={handleRadiosChange}
        />
      </QuestionSection>
      <ButtonComponent buttonName="Process" handleOnSubmit={handleSubmit} />
    </div>
  );
}

export default Modal;
