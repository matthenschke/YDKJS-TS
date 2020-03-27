import { create as createPost } from "./blogpost";

const post1 = createPost(
  "First Post",
  "M.H",
  "August 32nd, 2020",
  "www.goat.com"
);

post1.print();
