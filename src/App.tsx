import React from "react";
import List from "./List";
import { generateDataset } from "./helpers";

const data1 = [
  { id: 1, title: "Title 1" },
  { id: 2, title: "Title 2" },
  { id: 3, title: "Title 3" },
];
const data2 = [
  { name: "Name 1", description: "Description 1" },
  { name: "Name 2", description: "Description 2", link: "google.com" },
  { name: "Name 3", description: "Description 3" },
];

const data3 = generateDataset(200);

function App() {
  return (
    <div>
      <List data={data1} renderInfo={(info) => info.title} />
      <List
        data={data2}
        renderInfo={(info) => (
          <>
            <p style={{ margin: 0 }}>{info.name}</p>
            <p style={{ margin: 0 }}>{info.description}</p>
            {info.link && <p style={{ margin: 0 }}>{info.link}</p>}
          </>
        )}
      />
      <List data={data3} renderInfo={(info) => JSON.stringify(info)} />
    </div>
  );
}

export default App;
