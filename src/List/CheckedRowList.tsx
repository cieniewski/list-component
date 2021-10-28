import React from "react";
import { CheckedContext } from "./CheckedContext";
function CheckedRowList() {
  const { value } = React.useContext(CheckedContext);
  const items = value.join(", ");
  return <p>Selected items: {items}</p>;
}

export default CheckedRowList;
