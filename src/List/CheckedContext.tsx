import React from "react";
import { Set } from "immutable";

const CheckedContext = React.createContext<{
  value: Set<number>;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  hasItem: (id: number) => boolean;
}>({
  value: Set(),
  addItem: () => {},
  removeItem: () => {},
  hasItem: () => false,
});

interface Props {
  children: React.ReactNode;
}

function CheckedContextComponent({ children }: Props) {
  const [value, setValue] = React.useState<Set<number>>(Set());
  const addItem = React.useCallback(
    (id: number) => setValue((set) => set.add(id)),
    []
  );
  const removeItem = React.useCallback(
    (id: number) => setValue((set) => set.delete(id)),
    []
  );
  const hasItem = React.useCallback((id: number) => value.has(id), [value]);

  return (
    <CheckedContext.Provider
      value={{
        value: value,
        addItem: addItem,
        removeItem: removeItem,
        hasItem: hasItem,
      }}
    >
      {children}
    </CheckedContext.Provider>
  );
}

export default CheckedContextComponent;
export { CheckedContext };
