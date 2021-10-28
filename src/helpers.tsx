export const generateDataset = (length = 100) =>
  Array.from(Array(length).keys(), (i) => {
    return { id: i, field1: Math.random() };
  });
