import React from "react";

interface Props {
  pageHeading?: String;
}

const PageHeading = ({ pageHeading }: Props) => {
  return (
    <>
      <h1 className="text-5xl font-bold capitalize">{pageHeading}</h1>
      <hr className="h-1 bg-slate-200 mb-12" />
    </>
  );
};

export default PageHeading
