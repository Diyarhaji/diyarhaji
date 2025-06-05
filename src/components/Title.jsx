import React from 'react'
import { RxComponent1 } from "react-icons/rx";

const Title = ({text}) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="800" className=''>
        <div className="max-w-max  flex gap-2  mx-auto max-sm:text-3xl text-4xl items-center"> <RxComponent1 className='text-2xl text-hOne animate-bounce' /> {text}</div>

      
    </div>
  )
}

export default Title
