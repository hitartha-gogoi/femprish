import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Typography } from '@mui/material';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FcAbout } from "react-icons/fc"
import { SiFiverr } from "react-icons/si"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import { AiOutlineInfoCircle } from "react-icons/ai"


export default function Navbar({ close }){
  return(
    <>
    <div className="flex flex-col justify-start text-white items-center flex-wrap fixed top-0 left-0 bg-black h-screen w-52 z-[1600] text-md text-sm font-bold pb-20 space-y-2 bg-[#540c24]">
    <XIcon className="text-white h-6 w-6 mr-40" onClick={close} />
    <div className="flex justify-evenly items-center py-2 w-48 border-y-2 border-white hover:text-fuchsia-400 hover:border-fuchsia-400">
    <LibraryBooksIcon className="inline h-4 w-4" />
    <Link href="/">
    <Typography variant="subtitle6" className="relative right-6"> Blogs </Typography>
    </Link>
    </div>
    
    <Link href="/">
    <div className="flex justify-evenly items-center py-2 w-48 border-y-2 border-white hover:text-fuchsia-400 hover:border-fuchsia-400">
    <span className="inline h-4 w-4"> 🔗 </span>
    <Typography variant="subtitle6" className="relative right-6">     Link In Bio</Typography>
    </div>
    </Link>
    
    <Link href="/">
    <div className="flex justify-evenly items-center py-2 w-48 border-y-2 border-white hover:text-fuchsia-400 hover:border-fuchsia-400">
    <LibraryBooksIcon className="inline h-4 w-4" />
    <Typography variant="subtitle6" className="relative right-6"> Contact </Typography>
    </div>
    </Link>
    
    </div>
    </>
    )
}