'use client';
import React,{ useState } from 'react'
import Image from 'next/image'
import { DocumentTextIcon,XMarkIcon,EyeIcon,CodeBracketIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

const WorkCard = ({path,projectName,category,description,codeLink,liveLink}) => {
  const [showInfo,hideInfo] = useState('hidden')
  return (
    <div className='w-full sm:w-[22%] h-44 sm:h-36 rounded-xl overflow-hidden relative group inline-block sm:m-3 my-3 transition-all duration-1000 shadow-[0_0_10px_1px_rgba(0,0,0)]'>
        <Image src={path} height={1000} width={1000} className='w-full h-full' alt='Project '/>
        <div className={`${showInfo} absolute top-0 left-0 p-5 w-full h-full z-20 text-sm bg-[#282148] overflow-auto`}>
          <button onClick={()=>{
            hideInfo('hidden')
          }} ><XMarkIcon className='w-5 absolute top-2 left-2' /></button> 
          <p className='w-full text-wrap'>{description}</p>
        </div>
        <div className='absolute bottom-0 left-0 hidden group-hover:flex justify-end flex-col p-2 bg-black w-full h-full bg-opacity-25'>
            <div className='mx-auto flex gap-2'>
            {
                liveLink.trim().length!=0?<Link href={liveLink}><EyeIcon className='w-10 rounded-full border p-2' /></Link>:null
              }
              <button onClick={()=>{
                hideInfo('block')
              }
              }><DocumentTextIcon className='w-10 rounded-full border p-2' /></button>
              {
                codeLink.trim().length!=0?<Link href={codeLink}><CodeBracketIcon className='w-10 rounded-full border p-2' /></Link>:null
              }
            </div>
            <h2 className='font-bold text-[14px] w-full'>{projectName}</h2>
            <span>{category}</span>
        </div>
    </div>
  )
}

export default WorkCard