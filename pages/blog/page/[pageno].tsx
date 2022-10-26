import React from "react";
import Link from "next/link";

import HeaderComponent from "../../../components/HeaderComponent";
import PageHeading from "../../../components/PageHeading";
import { BlogsStructure } from "../../../utils/interfaces";
import BlogCard from "../../../components/BlogCard";
import AllCategories from "../../../components/AllCategories";
import { BASE_URL, ROUTES, BLOGS_PER_PAGE } from "../../../utils/constants";
import PageNumber from "../../../components/PageNumber";
import NavPage from "../../../components/PageNumber/NavPage";
import fetchData from "../../../utils/services/fetchservice";

interface props {
  data: BlogsStructure[];
  categories: string[];
  pageNumbers: number[];
  pageno: number;
}
const Pagination = ({ data, categories, pageNumbers, pageno }: props) => {
  let nextpage: number = Number(pageno) + 1;
  let prevpage: number = Number(pageno) - 1;

  return (
    <>
      <HeaderComponent />

      <div className="p-10">
        <div className="flex gap-8">
          <div className="flex-auto w-3/4 ">
            <PageHeading pageHeading="Blog" />
            <div className="grid gap-x-8 gap-y-4 grid-cols-3">
              {data.map((item: BlogsStructure, key: number) => {
                return <BlogCard itemData={item} key={key} />;
              })}
            </div>
            <div className="mt-10">
              {pageno > 1 ? (
                <NavPage
                  href={`${prevpage}`}
                  active={true}
                  text="<"
                  key={"prevnav_1"}
                />
              ) : (
                <NavPage active={false} text="<" key={"prevnav_2"} />
              )}

              {pageNumbers.map((singlePage: number, key: number) => {
                return (
                  <>
                    {singlePage == pageno ? (
                      <PageNumber
                        number={singlePage}
                        key={`${key}pgno1`}
                        active={true}
                      />
                    ) : (
                      <PageNumber
                        number={singlePage}
                        key={`${key}pgno2`}
                        active={false}
                      />
                    )}
                  </>
                );
              })}

              {pageno < pageNumbers.length ? (
                <NavPage
                  href={`${nextpage}`}
                  active={true}
                  text=">"
                  key={"nextnav_1"}
                />
              ) : (
                <NavPage active={false} text=">" key={"nextnav_2"} />
              )}
            </div>
          </div>
          <div className="flex-auto w-1/4 ">
            <div className="shadow-xl rounded-md py-5 mt-2 flex flex-col gap-2 sticky top-0">
              <span className="bg-slate-800 rounded-md p-2 w-full text-xl text-white">
                Blog Categories
              </span>

              {categories.map((category: string, key: number) => {
                return (
                  <>
                    <AllCategories
                      key={`${key}item`}
                      title={category}
                      href={`${ROUTES.blogCategoryRoute}/${category}`}
                    />
                    {key !== categories.length - 1 ? (
                      <hr key={`${key}divide`} className="mx-5" />
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
  query: { pageno },
}: {
  query: { pageno: number };
}) {
  const data = await fetchData(
    `${BASE_URL}${ROUTES.blogsRoute}?pageno=${pageno}`
  );

  const pageNumbers = await fetchData(
    `${BASE_URL}${ROUTES.blogsRoute}?totalpages=true`
  );

  const categories = await fetchData(
    `${BASE_URL}${ROUTES.blogsRoute}?categories=all`
  );

  return { props: { data, categories, pageNumbers, pageno } };
}

export default Pagination;
