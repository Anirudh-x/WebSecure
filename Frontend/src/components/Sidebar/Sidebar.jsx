import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdManageAccounts } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";

const Sidebar = ({sidebar}) => {
  return (
    <div>
      <div className={`${sidebar?"":"hidden"} w-[15vw] h-[100vh] flex flex-col items-center gap-10 pt-2 fixed z-[9] backdrop-blur-md`}>

        <CgProfile className='h-[60px] w-[60px] text-transparent z-[100]'/>

          <div className="flex items-center gap-2">
            <MdManageAccounts className='text-orange-400' />Account Info
          </div>
          <div className="flex items-center gap-2">
            <FaClockRotateLeft className='text-orange-400'/>Recent Used Tools
          </div>
          <div className="flex items-center gap-2">
            <PiDownloadSimpleBold className='text-orange-400'/>Downloads
          </div>
          <div className="flex items-center gap-2">
            <MdLogout className='text-orange-400'/>Log Out
          </div>
      </div>
    </div>
  )
}

export default Sidebar
