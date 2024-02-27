import React, { ReactNode } from "react";

interface QuestionSectionProps {
  question: string;
  children?: ReactNode;
  subTitle?: string;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({
  question,
  children,
  subTitle,
}) => {
  return (
    <div className="w-full mt-[30px]">
      <div className="w-[90%]">
        <h3 className="heading-3 mb-[20px]">{question}</h3>
        {subTitle && <p className="text-gray-light">{subTitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default QuestionSection;
