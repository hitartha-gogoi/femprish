import Nav from "../components/nav"
import { useState, useEffect, useRef } from "react"
import Link from "next/link";
import router from "next/router"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from "@mui/icons-material/Facebook"
import { FaDiscord } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai"
import { BsMedium, BsStackOverflow } from "react-icons/bs"
import { db, auth } from "../components/firebase"
import dynamic from 'next/dynamic'
import ReactTypingEffect from "react-typing-effect"

/*
const FemprishBaseImage = dynamic(
  ()=> {
    return import("../components/femprish-base-image")
  }, {
    ssr: false
  }
  )
*/

export default function Bio() {
  
  const [ open, setOpen ] = useState(false)
 
  return (
    <>
    <Nav />
    <main className="bg-white overflow-y-scroll">
   
     <div className="flex flex-col justify-center bg-white">

      {/* top screen */}
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-white ">
      
      <h1 className="flex justify-center items-center text-black text-6xl font-bold w-3/5">Welcome To Femprish</h1>
      <ReactTypingEffect speed={20} delay={10}  className="text-black text-xl font-light mt-6 mb-6 w-3/5" text={["Welcome to Femprish, a dynamic platform dedicated to promoting equality, fostering inclusivity, and empowering individuals to embrace their authentic selves, as we strive to redefine the meaning of feminist and break down societal barriers."]} />
      
      {/*
      <img src="https://femprish.websitedesignerbuddy.live/wp-content/uploads/2023/05/feminine-woman-844x1024-1.jpg" className="lg:my-10 h-4/5 w-80  rounded-2xl shadow-2xl object-cover cursor-pointer hover:scale-110 transition-all duration-150 ease-out mx-10 my-6 shadow-blue-500 " alt="image" />
  */}
      <div className="flex justify-evenly items-center w-4/5 ">
      <button onClick={()=> setOpen(true)} className="text-black hover:text-white text-center font-bold hover:bg-[#540c24] h-14 w-40 rounded-lg mr-2 mt-4 border-blue-400 border shadow-2xl shadow-fuchsia-500 hover:scale-125 transition-all ease-in-out duration-150">Explore Blogs</button> 
      <button className="m-4 text-black text-center hover:text-white text-centertext-center font-medium bg-white h-14 w-40 mt-4 rounded-lg hover:bg-[#540c24] border-fuchsia-500 border shadow-2xl shadow-fuchsia-500 hover:scale-125 transition-all ease-in-out duration-150">Contact Us</button>
      </div>
      </div>
      
      
      {/* info boxes */}
      <div className="flex flex-row justify-evenly items-center flex-wrap w-screen my-10 ml-10 mr-10">
    
     
      <div className="flex flex-col justify-center items-center shadow-2xl transparent h-60 w-96 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-gray-500 m-6">
      <p id="title" className="text-left text-lg font-light px-4 py-4 text-gray-500">
      <span className="font-bold text-xl"> Education and Awareness </span><br />
      We provide resources, workshops, and discussions to educate individuals about feminist principles, gender equality issues, and the importance of challenging societal norms.    </p>
      </div>
      
      <div className="flex flex-col justify-center items-center shadow-2xl transparent h-60 w-96 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-gray-500 m-6">
      <p id="title" className="text-left text-lg font-light px-4 py-4 text-gray-500">
      <span className="font-bold text-xl"> Community Building</span><br />
      Foster a supportive community where individuals can engage in open dialogue, share experiences, and collaborate on initiatives that promote gender equality, fostering a sense of belonging and collective action.   </p>
      </div>
      <div className="flex flex-col justify-center items-center shadow-2xl transparent h-60 w-96 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-gray-500 m-6">
      <p id="title" className="text-left text-lg font-light px-4 py-4 text-gray-500">
      <span className="font-bold text-xl"> Encourage Critical Thinking </span><br />
      Fostering an environment that encourages critical thinking and questioning of gender stereotypes, biases, and discrimination, empowering individuals to challenge and dismantle oppressive systems.    </p>
      </div>
      <div className="flex flex-col justify-center items-center shadow-2xl transparent h-60 w-96 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-gray-500 m-6">
      <p id="title" className="text-left text-lg font-light px-4 py-4 text-gray-500">
      <span className="font-bold text-xl"> Amplify Voices </span><br />
      Support and elevate marginalized voices, sharing their stories and experiences to raise awareness about intersectional feminism and the diverse struggles faced by different groups.   </p>
      </div>

  
      </div>
      
      
      {/* footer  */}
      <div className="flex flex-col justify-center items-center h-40 w-screen bg-black space-y-2 text-white">
    
    <div className="flex flex-row justify-center items-center flex-wrap space-x-4 my-8">
    <Link href="https://www.https://www.instagram.com/femprish/">
    <InstagramIcon className=" hover:scale-150 transition-all duration-150 ease-out" /></Link>
    <TwitterIcon className=" hover:scale-150 transition-all duration-150 ease-out" />
    <Link href="/">
    <FacebookIcon className=" hover:scale-150 transition-all duration-150 ease-out" /></Link>
    <BsMedium className=" hover:scale-150 transition-all duration-150 ease-out"  />
    </div>
    <span className="font-light text-gray-400">© all copyrights reserved, 2023</span>
    </div>

    
      </div>
    </main>
    </>
  )
}