import React from "react";
import { styled } from "styled-components";
import { ReactComponent as RapidTailorLogo } from "../../assets/icons/rapid-tailor.svg";
import { ReactComponent as AddCreditsIcon } from "../../assets/icons/add-credits-icon.svg";
import { BsGear } from "react-icons/bs";

const MainHeader = ({ credits }: { credits: number }) => {
  return (
    <MainHeaderWrapper>
      <StyledRapidTailorLogo />

      <CreditsAndOptionsWrapper>
        <CreditsWrapper>
          <h4>Credits {credits}</h4> <StyledAddCreditsIcon />
          <StyledBsGear size={25} />
        </CreditsWrapper>
      </CreditsAndOptionsWrapper>
    </MainHeaderWrapper>
  );
};

export default MainHeader;

const MainHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0rem 2rem 0 2rem;
  border: 1px solid blue;
`;

const CreditsAndOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CreditsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font-weight: 300;
    margin-right: 0.5rem;
  }
`;

const StyledAddCreditsIcon = styled(AddCreditsIcon)`
  cursor: pointer;
  margin-right: 2rem;
`;

const StyledBsGear = styled(BsGear)`
  cursor: pointer;
`;

const StyledRapidTailorLogo = styled(RapidTailorLogo)`
  cursor: pointer;
  width: 8rem;
`;
