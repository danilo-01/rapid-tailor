import React, { useContext } from "react";
import { styled } from "styled-components";
import DocumentSelection from "./document-selection";
import { AiOutlineFilePdf } from "react-icons/ai";
import { viewSectionsMargin } from "../../constants/styles";
import { Popupcontext } from "../../../popup";

const DocumentTypeSelection = () => {
  const {
    resumeStatus,
    coverLetterStatus,
    setResumeStatus,
    setCoverLetterStatus,
  } = useContext(Popupcontext)!;
  return (
    <DocumentTypeSelectionWrapper>
      <HeaderWrapper>
        <h3>Document Type</h3>
        {/* Add functions here */}
      </HeaderWrapper>
      <DocumentSelectionWrapper>
        <DocumentSelection
          selected={resumeStatus.selected}
          editLink={"any"}
          icon={<AiOutlineFilePdf size={30} />}
          title={"Resume"}
          stateSetter={setResumeStatus}
        />
        <DocumentSelection
          selected={coverLetterStatus.selected}
          editLink={"any"}
          icon={<AiOutlineFilePdf size={30} />}
          title={"Cover Letter"}
          stateSetter={setCoverLetterStatus}
        />
      </DocumentSelectionWrapper>
    </DocumentTypeSelectionWrapper>
  );
};

export default DocumentTypeSelection;

const DocumentTypeSelectionWrapper = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding: 0.5rem;
  ${viewSectionsMargin}
`;
const HeaderWrapper = styled.div`
  width: 100%;

  h3 {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const DocumentSelectionWrapper = styled.div`
  width: 100%;
  height: 110%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
