import React, { useContext } from "react";
import { styled } from "styled-components";
import TextGrabber from "./text-grabber";
import { Popupcontext } from "../../../popup";
import DeleteDescription from "./delete-description";

const JobDescriptionSelection = () => {
  const { targetJobDescription, handleUpdateTargetJobDescription } =
    useContext(Popupcontext)!;
  return (
    <JobDescriptionWrapper>
      <HeaderWithFunctionsWrapper>
        <h3>Job Desctiption</h3>
        {/* Add functions here */}
        <FunctionButtonsWrapper>
          <TextGrabber />
          <DeleteDescription />
        </FunctionButtonsWrapper>
      </HeaderWithFunctionsWrapper>
      <DescriptionSectionWrapper>
        <textarea
          value={targetJobDescription.text}
          onChange={(event) =>
            handleUpdateTargetJobDescription("RESET", event.target.value)
          }
        ></textarea>
      </DescriptionSectionWrapper>
    </JobDescriptionWrapper>
  );
};

export default JobDescriptionSelection;

const JobDescriptionWrapper = styled.div`
  width: 100%;
  border-radius: 0.625rem;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;
const HeaderWithFunctionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const DescriptionSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  textarea {
    min-width: 95%;
    max-width: 95%;
    min-height: 5rem;
    max-height: 7rem;
    border-radius: 0.625rem;
    border: 1px solid #e6e6e6;
    background: #fff;
  }
`;

const FunctionButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
