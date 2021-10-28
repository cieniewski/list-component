import React from "react";
import ListItemCheckbox from "./ListItemCheckbox";
interface Props<T> {
  renderInfo: (info: T) => React.ReactNode;
  data: T;
  id: number;
}

function ListRow<T>({ renderInfo, data, id }: Props<T>) {
  const content = renderInfo(data);
  return (
    <tr>
      <td>
        <ListItemCheckbox id={id} />
      </td>
      <td>{content}</td>
    </tr>
  );
}

export default ListRow;
