import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const UpperNav = () => {
  return (
    <div className='padding-container w-full py-2 bg-[#438F1B] flex justify-between'>
        <div className='flex gap-2 text-white items-center h-full'>
            <FaFacebookF />
            <FaTwitter />
            <FaSquareInstagram />
            <FaYoutube />
        </div>
        <div className='flex gap-2'>
            <p className='text-white text-[11px]'>FAQS</p>
            <div className='h-[10px] w-px bg-white my-auto'/>
            <p className='text-white text-[11px]'>TERMS</p>
            <div className='h-[10px] w-px bg-white my-auto'/>
            <p className='text-white text-[11px]'>CONTACT US</p>
        </div>
    </div>
  )
}

export default UpperNav