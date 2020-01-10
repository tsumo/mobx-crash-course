import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { IPost } from "../domain/postDomain";

type TStore = {
  posts: IPost[];
  postCount: number;
  addPost: (post: IPost) => void;
  removePost: (id: number) => void;
};

const createStore = (): TStore => ({
  posts: [],

  get postCount() {
    return this.posts.length;
  },

  addPost(post) {
    this.posts.push(post);
  },

  removePost(id) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
});

const StoreContext = React.createContext<TStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
