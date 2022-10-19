import React from "react";

import { BlogsStructure } from "../../utils/interfaces";
import PageHeading from "../PageHeading";

interface Props {
  itemData?: BlogsStructure;
}

const index = ({ itemData }: Props) => {
  return (
    <>
      <PageHeading pageHeading={`${itemData?.title}`} />
      <div className="shadow-2xl rounded-md px-10 py-5 mt-5 flex justify-start gap-8 w-auto items-center">
        <div className="w-1/3">
          <img
            className="rounded-md h-auto "
            src={itemData?.image}
            alt="blog_img"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between item-center mt-2">
            {/* <div className="text-5xl font-bold mt-2">{itemData.title}</div> */}
            <span className="text-slate-500">{itemData?.date}</span>
            <span className="bg-orange-500 font-semibold rounded-md px-2 py-1 text-white capitalize">
              {itemData?.tag}
            </span>
          </div>

          <div className="mt-2">{itemData?.description}</div>

          <div className="flex justify-between mt-20 items-center">
            <span>Read More</span>
            <span className="flex items-center">
              <img
                className="w-10 rounded-full h-10 mr-2"
                src="https://learn.microsoft.com/answers/storage/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg"
                alt="profile_image"
              />
              {itemData?.author}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
