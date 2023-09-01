import React, { useContext } from "react";
import { styled } from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Popupcontext } from "../../../popup";

const DocumentSelection = ({
  selected,
  editLink,
  icon,
  title,
  stateSetter,
}: {
  selected: boolean;
  editLink: string;
  icon: any;
  title: string;
  stateSetter: any;
}) => {
  const { handleStateUpdate } = useContext(Popupcontext)!;
  return (
    <DocumentSelectionWrapper>
      <DocumentIconAndTitleWrapper
        onClick={() => handleStateUpdate(stateSetter, { selected: !selected })}
      >
        <DocumentButtonStatus active={selected}>
          {selected ? (
            <AiFillCheckCircle color="#A6E1FA" />
          ) : (
            <IoMdAddCircleOutline color="#001C55" />
          )}
        </DocumentButtonStatus>
        <DocumentButtonTitle active={selected}>{title}</DocumentButtonTitle>
      </DocumentIconAndTitleWrapper>

      <DocumentButtonConfigure>
        <FiEdit />
      </DocumentButtonConfigure>
    </DocumentSelectionWrapper>
  );
};

export default DocumentSelection;

const DocumentSelectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  cursor: pointer;
  border-radius: 0.625rem;
  background: #f5f5f5;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
`;

const DocumentIconAndTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DocumentButtonStatus = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  border-top-left-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
  background-color: ${({ active }) => (active ? "#001C55" : "#D9D9D9")};
  transition: all 0.1s ease-in-out;
`;

const DocumentButtonTitle = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  box-sizing: border-box;
  color: ${({ active }) => (active ? "#D9D9D9" : "#001C55")};
  background-color: ${({ active }) => (active ? "#001C55" : "#D9D9D9")};
  transition: all 0.1s ease-in-out;
`;

const DocumentButtonConfigure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  box-sizing: border-box;
  border-top-right-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  background-color: "#D9D9D9";
  border-right: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;

// const DocumentButton = styled.div<{ active: boolean }>`
//   color: #ffffff;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   padding: 1rem;
//   padding-bottom: 0.5rem;
//   width: 100%;

//   box-sizing: border-box;

//   border-top-right-radius: 0.65rem;
//   border-top-left-radius: 0.65rem;
//   cursor: pointer;

//   background-color: ${({ active }) => (active ? "#001C55" : "#D9D9D9")};
// `;
// const DocumentButtonExtras = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   box-sizing: border-box;
// `;

// const buttonBottomStyles = `
// display: flex;
// justify-content: center;
// align-items: center;
// width: 100%;
// height: 100%;
// cursor: pointer;
// padding: 0.5rem;
// `;
// const LeftButton = styled.div<{ active: boolean }>`
//   ${buttonBottomStyles}

//   background-color: ${({ active }) => (active ? "#001C55" : "#D9D9D9")};
//   color: ${({ active }) => (active ? "#ffffff" : "#001C55")};
//   border-bottom-left-radius: 0.65rem;
// `;
// const RightButton = styled.div`
//   ${buttonBottomStyles}
//   border-bottom-right-radius: 0.65rem;

//   border: 1px solid #e6e6e6;
// `;
