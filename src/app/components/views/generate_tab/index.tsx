import React from "react";
import { styled } from "styled-components";
import SkillMatchRating from "./skill-match-rating";
import JobDescriptionSelection from "./job-description-selection";
import DocumentTypeSelection from "./document-type-selection";
import ConfirmGenerateSection from "./confirm-generate-section";

const Generate = () => {
  return (
    <GenerateWrapper>
      <SkillMatchRating skillMatchScore={80} />
      <JobDescriptionSelection />
      <DocumentTypeSelection />
      <ConfirmGenerateSection />
    </GenerateWrapper>
  );
};

export default Generate;

const GenerateWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
