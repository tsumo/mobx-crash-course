import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { IPost } from "../domain/postDomain";
import { getAllPosts } from "../service/postService";

type TStore = {
  posts: IPost[];
  loading: boolean;
  error: boolean;
  postCount: number;
  addPost: (post: IPost) => void;
  removePost: (id: number) => void;
  getAllPosts: () => void;
};

const createStore = (): TStore => ({
  posts: [],
  loading: false,
  error: false,

  get postCount() {
    return this.posts.length;
  },

  addPost(post) {
    this.posts.unshift(post);
  },

  removePost(id) {
    this.posts = this.posts.filter(post => post.id !== id);
  },

  async getAllPosts() {
    this.loading = true;
    try {
      this.posts = await getAllPosts();
      this.loading = false;
      this.error = false;
    } catch {
      this.loading = false;
      this.error = true;
    }
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
