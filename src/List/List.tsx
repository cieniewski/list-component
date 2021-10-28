import React from "react";
import ListRow from "./ListRow";
import CheckedRowList from "./CheckedRowList";
import CheckedContext from "./CheckedContext";

interface Props<T> {
  data: Array<T>;
  renderInfo: (info: T) => React.ReactNode;
}

function List<T>({ data, renderInfo }: Props<T>) {
  return (
    <CheckedContext>
      <div>
        <CheckedRowList />
        <table>
          <thead>
            <tr>
              <th />
              <th>
                <span>Info</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <ListRow
                key={index}
                id={index}
                data={data}
                renderInfo={renderInfo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </CheckedContext>
  );
}

export default List;
