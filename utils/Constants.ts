// export const BASE_URL = "http://localhost:3000";
export const BASE_URL = process.env.VERCEL_URL;
export const ROUTES = {
  blogsRoute: "/api/blogs",

  blogDetailsRoute: "/blog",
  blogsPageRoute: "/blog/page",
  blogCategoryRoute: "/blog/category",
};

export const BLOGS_PER_PAGE = 6;
