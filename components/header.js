import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Typography } from '@mui/material';
import { VscAccount } from "react-icons/vsc"
import Avatar from "@mui/material/Avatar"


function Header({ isOpen, open, close }) {


  const [ show, handleShow ] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 100){
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
  
    
  }, [])
  
  return (
    <div className={`flex flex-row justify-between items-center flex-wrap h-24 w-screen  fixed top-0 left-0 z-[1600] ${show ? 'bg-[#F8DFDB] shadow-2xl shadow-gray-200': 'bg-transparent' }`}>
    <div className="flex flex-row justify-center items-center">
  <Link href="/">
  <div className="flex flex-row justify-center items-center">
  {!isOpen ? <MenuIcon className="text-black h-6 w-6" onClick={open} /> : <XIcon className="text-white h-6 w-6" onClick={close} />}
    <img className='h-20 w-48 ml-4 ' src='https://femprish.websitedesignerbuddy.live/wp-content/uploads/2023/05/femprishlogo.png' />
  </div>
  </Link>
    </div>
      </div>
  )
}

export default Header
