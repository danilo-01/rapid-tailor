import React from "react";
import { styled } from "styled-components";
import { viewSectionsMargin } from "../../constants/styles";

const SkillMatchRating = ({ skillMatchScore }: { skillMatchScore: number }) => {
  return (
    <SkillMatchRatingWrapper>
      <h3>{skillMatchScore}% Skill Match!</h3>
      <h4>+ Add More Skills</h4>
    </SkillMatchRatingWrapper>
  );
};

export default SkillMatchRating;

const SkillMatchRatingWrapper = styled.div`
  ${viewSectionsMargin}
  width: 100%;
  border-radius: 0.625rem;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;

  h3 {
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    padding: 0;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 200;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;
