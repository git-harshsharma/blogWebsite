import React from "react";
import Link from "next/link";

interface props {
  title?: String;
  href?: string;
}

const Index = ({ title, href }: props) => {
  return (
    <>
      <Link href={href}>
        <span className="cursor-pointer p-2 w-full text-md capitalize">
          {title}
        </span>
      </Link>
    </>
  );
};

export default Index;
