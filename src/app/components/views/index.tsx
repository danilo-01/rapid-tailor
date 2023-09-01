import React, { useMemo } from "react";
import { styled } from "styled-components";
import { viewType } from "../../models";
import Generate from "./generate_tab";

const ViewSwitch = ({ view }: { view: viewType }) => {
  const viewToRender = useMemo(() => {
    if (view === "GENERATE") return <Generate />;
  }, [view]);
  return <ViewSwitchWrapper>{viewToRender}</ViewSwitchWrapper>;
};

export default ViewSwitch;

const ViewSwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding: 1rem;

  box-sizing: border-box;
`;
