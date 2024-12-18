import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Topbar from '../Components/Topbar';
import Link from 'next/link';


const page = () => {
  return (
    <div>
      <Topbar />
        <div>
    
      <br></br>
     <div className="header flex items-center justify-center gap-x-8">
        <h1 className="font-bold text-2xl">Bandage</h1>
        <nav className='mt-2'>
            <ul className="flex gap-x-4">
        
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/hoop">Product</Link>
            </li>
            <li>
              <Link href="/products">Pricing</Link>
            </li>
            <li>
              <Link href="/contacts">Contact</Link>
            </li>
            <li>
            </li>
            <li>
               
            </li>
            </ul>
        </nav>
        <button className='text-blue-500'>
                    Login
                </button>
              <button className="bg-blue-500 m-2 p-2 text-white">
                Become a member
              </button>
      </div>
     <br></br>
     <br></br>




     
      
      
      
      </div>
      <div>
        <img src="images/arsh.png" alt='img'></img></div>
        <div>
        <img src="images/team.png" alt='img'></img>
        </div>
        <div>
            <img src="images/avatar.png" alt='img'></img>
        </div>
        <div className='bg-gray-300'>
            <div className='  flex gap-1 flex items-center justify-between'>
      <h1 className='font-bold text-2xl'>Bandage</h1>
    <p className='text-blue-500'><IoLogoInstagram/></p>
    <p className='text-blue-500'><FaFacebook/></p>
    <p className='text-blue-500'><FaTwitter/></p>
    </div>
    </div>
    <br></br>
    <br></br>

      <div className='bg-white-600'>
    <div className='grid grid-cols-5'>
        <div className='col-span-1'><h1 className='font-bold'>Company Info</h1>
            <p>About US</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blogs</p>
        </div>

        <div className='col-span-1'>
            <h2 className='font-bold'>Legal</h2>
        <p>
            About Us
        </p>
        <p>
            Carrier
        </p>
        <p>
            We are hiring
        </p>
        <p>
            Blog
        </p>
        </div>

        <div>
            <h3 className='font-bold'>Features</h3>
            <p>
            Business Marketing</p>
                <p>
                User Analytic </p>
                    <p>
                    Live Chat</p>
                        <p>
                        Unlimited Support </p></div>

        <div><h2 className='font-bold'>Resources</h2>
        <p>
        IOS & Android </p>
            <p>
            Watch a Demo </p>
                <p>
                Customers </p>
                    <p>
                    API</p></div>


        <div> <h1 className='font-bold'>Get in Touch</h1>
            <input
            type="email"
            placeholder='Enter your Email'
            className='border border-black p-2 mt-2 mb-2'/>
            <button className='bg-green-500 text-white'>
                Subscribe
                </button>
        </div>
        </div>

    </div>

    </div>
    
    
  )
}

export default page