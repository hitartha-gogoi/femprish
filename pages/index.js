import { useState, useEffect, useRef } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from "../components/nav"

export default function Home() {

  const [ open, setOpen ] = useState(false)
  
  return (
    <div className="flex flex-col w-screen h-full no-scrollbar">
      <Nav isOpen={open} open={()=> setOpen(true)} close={()=> setOpen(false)} />

    </div>
  )
}
