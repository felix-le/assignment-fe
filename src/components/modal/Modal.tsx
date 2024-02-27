import React, { useState } from "react";
import SwitchModalTitle from "../elements/SwitchModalTitle";
import RadioComponent from "../elements/Radio";
import QuestionSection from "components/elements/QuestionsSection";
import MultiRadio from "../elements/MultiRadio";
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
        <MultiRadio
          values={tools}
          selectedValues={selectedValues}
          onChange={handleRadiosChange}
        />
      </QuestionSection>
    </div>
  );
}

export default Modal;
