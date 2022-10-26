import React, { useEffect, useState } from "react";
import Link from "next/link";

import SearchedItem from "../SearchedItem";
import { BlogsStructure } from "../../utils/interfaces";
import { ROUTES } from "../../utils/constants";
import fetchData from "../../utils/services/fetchservice"

const HeaderComponent = () => {
  const [data, setData] = useState<BlogsStructure[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [searchedData, setSearchedData] = useState<BlogsStructure[]>([]);

  useEffect((): void => {
    async function listUniqueTags() {
      const AllData = await fetchData(`${ROUTES.blogsRoute}?all=true`);
      setData(AllData);
    }
    listUniqueTags();
  }, []);

  const searchBlogs = (value: string): void => {
    setSearchString(value);

    let filterData: BlogsStructure[] = [];

    filterData = data.filter(
      (item) =>
        item.title.includes(value) ||
        item.tag.includes(value) ||
        item.description.includes(value)
    );
    if (filterData.length > 0) {
      setSearchedData(filterData);
    } else {
      setSearchedData([]);
    }
  };

  return (
    <>
      <section>
        <div className="bg-slate-800 text-white flex justify-between py-5 px-14 items-center">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 stroke-orange-600"
              style={{ marginRight: "-5px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <span
              className="text-xl text-sky-500"
              style={{ marginTop: "-4px" }}
            >
              /
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              style={{ marginLeft: "-5px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <Link href={`/`}>DevSpace</Link>
          </div>
          <div className="uppercase flex justify-evenly w-40">
            <Link href={`${ROUTES.blogsPageRoute}/1`}>BLOG</Link>
            <span>About</span>
          </div>
        </div>
        <div className="bg-slate-500 py-4 px-14 relative">
          <div className="flex justify-end items-center">
            <div className="bg-white w-56 text-sm flex rounded-full justify-around overflow-hidden items-center">
              <input
                type="text"
                className="h-9 px-2 focus:outline-none"
                placeholder="Search Posts..."
                onChange={(e) => searchBlogs(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 stroke-2"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {searchedData.length !== 0 && searchString.length !== 0 ? (
            <>
              <div
                className="absolute bg-white rounded-md border-2 mt-6 border-slate-800 p-8 overflow-auto"
                style={{ right: "3%", zIndex: "1", width: "45%", maxHeight: "80vh" }}
              >
                <span className="text-xl">{searchedData.length} Results</span>
                {searchedData.map((itemData, key) => {
                  return <SearchedItem itemData={itemData} key={key} />;
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
