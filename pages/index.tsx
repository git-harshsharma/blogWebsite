import React from "react";

import HeaderComponent from "../components/HeaderComponent";
import BlogCard from "../components/BlogCard";
import { BlogsStructure } from "../utils/interfaces";
import PageHeading from "../components/PageHeading";
import { BASE_URL, ROUTES } from "../utils/constants";
import fetchData from "../utils/Services/FetchService";

interface props {
  data?: BlogsStructure[];
}

const index = ({ data }: props) => {
  return (
    <>
      <HeaderComponent />
      <div className="p-10">
        <PageHeading pageHeading="Latest Blogs" />
        <div className="grid gap-x-8 gap-y-4 grid-cols-3">
          {data.map((item: BlogsStructure, key: number) => {
            return <BlogCard itemData={item} key={key} />;
          })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const data = await fetchData(`${BASE_URL}${ROUTES.blogsRoute}?latest=true`);

  return { props: { data } };
}

export default index;
