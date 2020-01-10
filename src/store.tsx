import React from "react";
import { useLocalStore } from "mobx-react-lite";

const createStore = () => ({
  items: [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth"
  ],

  get itemCount() {
    return this.items.length;
  },

  addItem(item: string) {
    this.items.push(item);
  },

  removeItem() {
    this.items.splice(-1, 1);
  }
});

type TStore = ReturnType<typeof createStore>;

const storeContext = React.createContext<TStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
