import React from 'react'
import Link from 'next/link'
interface props {
    active?: boolean;
    text?:string;
    href?:string;
}

const index = ({active, text, href}:props) => {
  return (
    <>
    {active?(
        <Link href={href} >

        <span className="cursor-pointer  bg-slate-100 p-2 px-4 mx-2 font-lg border border-slate-600">
            {text}
        </span>
        </Link>
    ):(
        <span className="text-slate-300 bg-slate-100 p-2 px-4 mx-2 font-lg border border-slate-300">
            {text}
        </span>
    )}
   
    </>
  )
}

export default index