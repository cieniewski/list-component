import React from "react";
import { CheckedContext } from "./CheckedContext";

interface Props {
  id: number;
}

function ListItemCheckbox({ id }: Props) {
  const { addItem, removeItem, hasItem } = React.useContext(CheckedContext);
  const isChecked = hasItem(id);
  const handleChange = React.useCallback(() => {
    if (isChecked) {
      removeItem(id);
    } else {
      addItem(id);
    }
  }, [addItem, id, isChecked, removeItem]);

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </label>
  );
}

export default ListItemCheckbox;
