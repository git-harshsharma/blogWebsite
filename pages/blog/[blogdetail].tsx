import React from "react";

import HeaderComponent from "../../components/HeaderComponent";
import BlogDetails from "../../components/BlogDetails";
import { BASE_URL, ROUTES } from "../../utils/constants";
import { BlogsStructure } from "../../utils/interfaces";
import fetchData from "../../utils/Services/FetchService";

interface props {
  data?: BlogsStructure;
}

const BlogDetail = ({ data }: props) => {
  return (
    <>
      <HeaderComponent />
      <div className="p-10">
        <BlogDetails itemData={data} />
      </div>
    </>
  );
};
export async function getServerSideProps({
  query: { blogdetail },
}: {
  query: { blogdetail: string };
}) {
  let data = await fetchData(
    `${BASE_URL}${ROUTES.blogsRoute}?itemid=${blogdetail}`
  );

  // data = await data[0];

  return { props: { data } };
}
export default BlogDetail;
