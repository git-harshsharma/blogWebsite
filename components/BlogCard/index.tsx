import React from "react";
import Link from "next/link";

import { BlogsStructure } from "../../utils/interfaces";
import { ROUTES } from "../../utils/Constants";

interface Props {
  itemData?: BlogsStructure;
}

const BlogCard = ({ itemData }: Props) => (
  <>
    <Link href={`${ROUTES.blogDetailsRoute}/${itemData?.id}`}>
      <div className="shadow-lg rounded-md px-10 py-5 mt-2 hover:shadow-xl transition delay-75 cursor-pointer">
        <img
          className="rounded-md h-auto w-full"
          src={itemData?.image}
          alt="blog_img"
        />
        <div className="flex justify-between item-center mt-2">
          <span className="text-slate-500">{itemData?.date}</span>
          <span className="bg-orange-500 font-semibold rounded-md px-2 py-1 text-white capitalize">
            {itemData.tag}
          </span>
        </div>
        <div className="text-xl font-bold mt-2 capitalize">
          {itemData?.title}
        </div>
        <div className="mt-2">{itemData.description}</div>
        <div className="flex justify-between mt-5 items-center">
          <span>Read More</span>
          <span className="flex items-center capitalize">
            <img
              className="w-10 rounded-full h-10 mr-2"
              src="https://learn.microsoft.com/answers/storage/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg"
              alt="profile_image"
            />
            {itemData?.author}
          </span>
        </div>
      </div>
    </Link>
  </>
);

export default BlogCard;
