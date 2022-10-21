import React from "react";
import Link from "next/link";

import HeaderComponent from "../../../components/HeaderComponent";
import PageHeading from "../../../components/PageHeading";
import BlogCard from "../../../components/BlogCard";
import { BlogsStructure } from "../../../utils/interfaces";
import AllCategories from "../../../components/AllCategories";
import { BASE_URL, ROUTES } from "../../../utils/Constants";

interface props {
  data?: BlogsStructure[];
  category?: string;
  categories?: string[];
}

const CategoryPage = ({ data, category, categories }: props) => {
  return (
    <>
      <HeaderComponent />

      <div className="p-10">
        <div className="flex gap-8">
          <div className="flex-auto w-3/4 ">
            <PageHeading pageHeading={`${category} blog`} />
            <div className="grid gap-x-8 gap-y-4 grid-cols-3">
              {data.map((item: BlogsStructure, key: number) => {
                return <BlogCard itemData={item} key={key} />;
              })}
            </div>
          </div>
          <div className="flex-auto w-1/4 ">
            <div className="shadow-xl rounded-md  py-5 mt-2 flex flex-col gap-2 sticky top-0">
              <Link href="/blog">
                <span className="bg-slate-800 rounded-md p-2 w-full text-xl text-white">
                  Blog Categories
                </span>
              </Link>
              {categories.map((category: string, key: number) => {
                return (
                  <>
                    <AllCategories
                      key={`${key}cat`}
                      title={category}
                      href={`${category}`}
                    />
                    {key !== categories.length - 1 ? (
                      <hr key={`${key}bar`} className="mx-5" />
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({
  query: { category },
}: {
  query: { category: string };
}) {
  const res = await fetch(`${BASE_URL}${ROUTES.blogsRoute}?showme=${category}`);
  const data = await res.json();

  const resCat = await fetch(`${BASE_URL}${ROUTES.blogsRoute}?categories=all`);
  const categories = await resCat.json();

  return { props: { data, category, categories } };
}
export default CategoryPage;
