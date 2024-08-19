import React from 'react'
import TechList from './TechList.js';
import { FaReact } from "react-icons/fa";

const Technology = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
      <div className='w-[60vw] flex flex-wrap justify-center gap-10'>
      {
        TechList.map(techItem => (
          <div className='w-[24vw] flex items-center gap-10 p-4 rounded-[2rem] backdrop-blur-sm border'>
            <techItem.techIcon className='h-16 w-16' />
            <div>
              <h1 className='text-2xl font-semibold'>{techItem.techName}</h1>
              <p>{techItem.techDesc}</p>
            </div>
          </div>
        ))
      } 
      </div>


    </div>
  )
}

export default Technology