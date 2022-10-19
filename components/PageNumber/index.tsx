import React from 'react'
import Link from 'next/link';

interface props {
    number?: number;
    active?: boolean;
}

const Index = ({number, active}:props) => {
  return (
    <>  
    <Link href ={`${number}`}>

    {active?(
        <span className="cursor-pointer bg-slate-300 p-2 px-4 mx-px font-lg border border-slate-600">
            {number}
        </span>
    ):(
        <span className="cursor-pointer p-2 px-4 mx-px font-lg border border-slate-600">
            {number}
        </span>
    )}
    </Link>
         
    </>
  )
}

export default Index