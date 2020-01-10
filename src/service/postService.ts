import { IPost, assertIsArrayOfIPost } from "../domain/postDomain";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = async (): Promise<IPost[]> => {
  const response = await fetch(POST_URL);
  const json = await response.json();
  assertIsArrayOfIPost(json);
  return json;
};
