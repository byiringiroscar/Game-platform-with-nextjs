import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const UpperNav = () => {
  return (
    <div className='w-full h-[30px] bg-slate-700'>
        <div className='flex gap-2 text-white items-center h-full'>
            <FaFacebookF />
            <FaTwitter />
            <FaSquareInstagram />
            <FaYoutube />
        </div>
    </div>
  )
}

export default UpperNav