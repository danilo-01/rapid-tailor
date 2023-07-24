import React from "react";
import { styled } from "styled-components";
import { viewType } from "../models";

const NavigationTabs = ({
  setCurrentTab,
  currentTab,
}: {
  setCurrentTab: React.Dispatch<React.SetStateAction<viewType>>;
  currentTab: viewType;
}) => {
  const tabs: viewType[] = ["GENERATE", "STYLES", "DOWNLOADS"];
  return (
    <NavigationTabsWrapper>
      {tabs.map((tab) => {
        return (
          <TabWrapper
            active={currentTab === tab}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </TabWrapper>
        );
      })}
    </NavigationTabsWrapper>
  );
};

export default NavigationTabs;

const NavigationTabsWrapper = styled.div`
  width: 100%;
  max-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabWrapper = styled.div<{ active: boolean }>`
  width: 100%;
  padding: 1rem;
  text-align: center;

  cursor: pointer;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background-color: ${(props) => (props.active ? "#FFFFFF" : "#F5F5F5")};

  border-top: 1px solid ${(props) => (props.active ? "#e6e6e6" : "#F5F5F5")};
  border-right: 1px solid ${(props) => (props.active ? "#e6e6e6" : "#e6e6e6")};
  border-left: 1px solid ${(props) => (props.active ? "#e6e6e6" : "#e6e6e6")};
  border-bottom: 1px solid ${(props) => (props.active ? "#ffffff" : "#e6e6e6")};
`;
