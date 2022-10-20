import React from "react";
import Link from "next/link";

interface props {
  title?: string;
  href?: string;
}

const AllCategories = ({ title, href }: props) => (
  <>
    <Link href={href}>
      <span className="cursor-pointer p-2 w-full text-md capitalize">
        {title}
      </span>
    </Link>
  </>
);

export default AllCategories;
