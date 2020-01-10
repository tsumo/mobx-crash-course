export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function assertIsPost(post: IPost): asserts post is IPost {
  if (typeof post !== "object") {
    throw new TypeError("Post is not an object!");
  }
  if (typeof post.userId !== "number") {
    throw new TypeError("UserId is not a number!");
  }
  if (typeof post.id !== "number") {
    throw new TypeError("Id is not a number!");
  }
  if (typeof post.title !== "string") {
    throw new TypeError("Title is not a string!");
  }
  if (typeof post.body !== "string") {
    throw new TypeError("Body is not a string!");
  }
}

export function assertIsArrayOfIPost(posts: IPost[]): asserts posts is IPost[] {
  if (!(posts instanceof Array)) {
    throw new TypeError("Posts is not an array!");
  }
  posts.forEach(post => assertIsPost(post));
}
