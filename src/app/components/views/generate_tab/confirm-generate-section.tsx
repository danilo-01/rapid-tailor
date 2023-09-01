import React, { useContext } from "react";
import { styled } from "styled-components";
import { clickAnimation1, viewSectionsMargin } from "../../constants/styles";
import { Popupcontext } from "../../../popup";

const ConfirmGenerateSection = () => {
  const {
    confirmedGenerate,
    setConfirmedGenerate,
    handleServiceWorkerRequest,
    resumeStatus,
    coverLetterStatus,
    targetJobDescription,
  } = useContext(Popupcontext)!;
  return (
    <ConfirmGenerateSectionWrapper>
      <TermsAndConditionsWrapper>
        <TermsAndConditionsInput
          type="checkbox"
          checked={confirmedGenerate}
          onChange={(event) => {
            setConfirmedGenerate(event.target.checked);
          }}
        />
        <p>
          By checking this box, you acknowledge and agree to our{" "}
          <a href="https://google.com">Terms and Conditions.</a>
        </p>
      </TermsAndConditionsWrapper>
      <GenerateDocumentsButton
        unlocked={
          confirmedGenerate &&
          targetJobDescription.text !== "" &&
          (resumeStatus.selected || coverLetterStatus.selected)
        }
        onClick={() =>
          confirmedGenerate && handleServiceWorkerRequest("GENERATE_DOCUMENTS")
        }
      >
        Generate
      </GenerateDocumentsButton>
    </ConfirmGenerateSectionWrapper>
  );
};

export default ConfirmGenerateSection;

const ConfirmGenerateSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f5f5f5;
  padding: 0.5rem;
  width: 100%;
  ${viewSectionsMargin}
`;
const TermsAndConditionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  input {
    margin-right: 1rem;
  }
`;

const TermsAndConditionsInput = styled.input`
  cursor: pointer;
`;
const GenerateDocumentsButton = styled.button<{ unlocked: boolean }>`
  ${(props) => props.unlocked && clickAnimation1};
  &:active {
    ${(props) => props.unlocked && "  transform:scale(0.99)"};
  }
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0578eb;
  opacity: ${(props) => (props.unlocked ? "100%" : "50%")};
  color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  border-radius: 0.625rem;
  cursor: ${(props) => (props.unlocked ? "pointer" : "not-allowed")};
`;
