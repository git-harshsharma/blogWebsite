//export const BASE_URL = "http://localhost:3000";
const dev = process.env.NODE_ENV !== "production";

const server = dev
  ? "http://localhost:3000"
  : "https://blogwebsite-three.vercel.app";

export const BASE_URL = server;

export const ROUTES = {
  blogsRoute: "/api/blogs",

  blogDetailsRoute: "/blog",
  blogsPageRoute: "/blog/page",
  blogCategoryRoute: "/blog/category",
};

export const BLOGS_PER_PAGE = 6;
