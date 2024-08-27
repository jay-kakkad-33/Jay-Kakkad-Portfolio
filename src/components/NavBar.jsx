'use client';
import React,{ useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const navLinks = [
    {
        title:'My Work',
        href:'#work'
    },
    {
        title:'About Me',
        href:'#about'
    },
    {
        title:'Contact',
        href:'#contact'
    },
]

const NavBar = () => {
    const [navBarOpen,changeNavBar] = useState(false);
    const [navBarHidden,hideNavBar] = useState('-translate-y-full');
  return (
    <div className='w-full flex justify-between px-5 items-center fixed left-0 z-10'>
        <Link href='/'><Image src='//Images/JK.png' alt='Logo' height={500} width={500} className='w-20' /></Link>
        <ul className='hidden md:flex gap-4'>
            {
                navLinks.map((link,index)=>{
                    return <li key={index}><NavLink href={link.href} title={link.title} /></li>
                })
            }
        </ul>
        <div className='md:hidden'>
            {
                !navBarOpen?(<button onClick={()=>{
                    changeNavBar(true)
                    hideNavBar('top-5 translate-y-0')
                }
                }>
                    <Bars3Icon className='w-6 transition-all duration-100'/>
                </button>):
                (<button onClick={()=>{
                    changeNavBar(false)
                    hideNavBar('-translate-y-full top-0')
                }} className='border rounded-full text-black bg-white'><XMarkIcon className='w-6 transition-all duration-100 z-30' /></button>)
            }
        </div>
        <div className={`md:hidden absolute py-10 w-[90%] h-fit p-5 bg-black rounded-xl mx-auto -z-10 transform ${navBarHidden} transition-all duration-200`}>
            <MenuOverlay links={navLinks} onclick={()=>{
                changeNavBar(false)
                hideNavBar('-translate-y-full')
                }}/>
        </div>
    </div>
  )
}

export default NavBar