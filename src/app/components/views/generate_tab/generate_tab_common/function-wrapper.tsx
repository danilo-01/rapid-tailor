import { styled } from "styled-components";
import { clickAnimation1 } from "../../../constants/styles";

const FunctionWrapper = styled.div<{
  active: boolean;
  activeColor: string;
  iconColor?: string;
}>`
  background-color: ${(props) => props.active && props.activeColor};
  ${clickAnimation1}
  color: ${(props) => props.iconColor || "black"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 7px;
  padding: 0.3rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  max-width: 1.5rem;
  max-height: 1.5rem;
  min-width: 1.5rem;
  min-height: 1.5rem;

  &:hover {
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  }

  transition: all 0.1s ease-in-out;
`;

export default FunctionWrapper;
