import React from "react";
import Link from "next/link";

import { BlogsStructure } from "../../utils/interfaces";
import { ROUTES } from "../../utils/constants";

interface props {
  itemData?: BlogsStructure;
}

const SearchedItem = ({ itemData }: props) => {
  return (
    <>
      <Link href={`${ROUTES.blogDetailsRoute}/${itemData?.id}`}>
        <div className="shadow-lg rounded-md px-10 py-5 mt-5 hover:shadow-xl transition delay-75 cursor-pointer">
          <div className="flex justify-between item-center mt-2">
            <span className="text-slate-500">{itemData?.date}</span>
            <span className="bg-orange-500 font-semibold rounded-md px-2 py-1 text-white capitalize">
              {itemData?.tag}
            </span>
          </div>
          <div className="text-xl font-bold mt-2">{itemData?.title}</div>
          <div className="mt-2">{itemData?.description}</div>
        </div>
      </Link>
    </>
  );
};

export default SearchedItem;
