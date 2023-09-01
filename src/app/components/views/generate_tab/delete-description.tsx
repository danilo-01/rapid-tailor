import React, { useContext } from "react";
import { FunctionWrapper } from "./generate_tab_common";
import { BsTrash } from "react-icons/bs";
import { Popupcontext } from "../../../popup";
import { errorColor } from "../../constants/styles";

function DeleteDescription() {
  const { handleUpdateTargetJobDescription } = useContext(Popupcontext)!;
  return (
    <FunctionWrapper
      active={true}
      activeColor={errorColor}
      iconColor="#F5F5F5"
      onClick={() => handleUpdateTargetJobDescription("DELETE")}
    >
      <BsTrash size={15} />
    </FunctionWrapper>
  );
}

export default DeleteDescription;
