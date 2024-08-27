'use client';
import React,{ useState} from 'react'
import CategoryButton from './CategoryButton'
import WorkCard from './WorkCard';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const categories = [
  {
      name:'All'
  },
  {
      name:'Web'
  },
  {
      name:'Python'
  },
  {
      name:'Android'
  }
]

const workList =[
  {
      id:1,
      path:'/public/images/WebsiteMockup.png',
      projectName:'SJLVB Hostel Website',
      description:'SJLVB is a website for hostel which shows hostel amenities and there\'s an admission form. Students can fillup the form to apply for admission and there\'s an admin panel from where hostel management can decide to accept or reject the application. ',
      category:'Web',
      tag:['All','Web'],
      codeLink:'',
      liveLink:'https://www.sjlvbvvn.org/'
  },
  {
      id:2,
      path:'./images/GDCST.png',
      projectName:'GDCST College App',
      description:'GDCST is an Android App developed for an academic department. There are 3 types of users in this app 1:Office, 2:Teachers, 3:Students. office users can creare teachers and students accounts for this app and also they can post notifications for all the users. Teachers can upload study materials which students can download and also teachers can post notifications. Students can see information about the institution and can download study materials which was uploaded by the teachers. All users can see their profiles and can change their passwords.',
      category:'Android',
      tag:['All','Android'],
      codeLink:'',
      liveLink:''
  },
  {
      id:3,
      path:'./images/Gamezy.png',
      projectName:'Gamezy - A Mini games website',
      description:'Gamezy is a web application built with PHP as a backend. On this website user can register and play mini games in their free time. They can see gamewise leaderboard and their high scores also when they played the game last.',
      category:'Web',
      tag:['All','Web'],
      codeLink:'',
      liveLink:''
  },
  {
      id:4,
      path:'./images/Renamer.png',
      projectName:'Multiple file renamer',
      description:'Multiple file renamer is a minimal desktop applciation made with python\'s tkinter and os modules. Using this application you can name multiple files with similar prefixes. Example: You have many images in you wallpapers with some weired names so you can select that folder and then give a name i.e. Wallpaper this application rename all the images names as Wallpaper 1, Wallpaper 2... for all the images.',
      category:'Python',
      tag:['All','Python'],
      codeLink:'',
      liveLink:''
  },
  {
      id:5,
      path:'./images/Codepad.png',
      projectName:'Codepad',
      description:'Codepad is a simple text editor made with python with a bit of advancement than regular notepad. It has extra freatures than a normal notepad like: 1.Theme, 2.Run it has some theme options and can run python and html files.',
      category:'Python',
      tag:['All','Python'],
      codeLink:'https://github.com/jay-kakkad-33/Codepad_Texteditor',
      liveLink:''
  },
  {
      id:6,
      path:'./images/Calculator.png',
      projectName:'Calculator (History feature)',
      description:'A Calculator desktop app made with python. It has history feature like windows\' calculator has. User can directly take that history to main display. It has a feature which shows the current battery percentage of the device.',
      category:'Python',
      tag:['All','Python'],
      codeLink:'https://github.com/jay-kakkad-33/GUI_Calculator',
      liveLink:''
  },
]

const WorkSection = () => {
  const [tag,setTag] = useState('All');
  const [showInfo,hide] = useState('hidden')
  return (
    <section className='w-full min-h-screen opacity-90 pt-24' id='work'>
    <div className={`w-auto max-w-[90%] sm:w-fit px-5 mx-auto py-1 bg-gray-500 rounded-full flex flex-row justify-around items-center divide-x ${categories.length>4?'overflow-auto':null}  `}>

        {
            categories.map((category,index)=>{
                return <span key={index} className='w-full'><CategoryButton onClick={()=>setTag(category.name)} name={category.name} isSelected={tag === category.name}/></span>
            })
        }
    </div>
    {
        categories.length>4?<ArrowLongRightIcon className='w-5 absolute left-3/4 md:hidden' />:null
    }
    <div className='w-full sm:py-10 sm:px-44 p-5 transition-all duration-300'>
        {
            workList.map((work,index)=>{
                return <div key={index} className={`${work.tag.includes(tag)?'inline':'hidden'}`}><WorkCard path={work.path} projectName={work.projectName} category={work.category} description={work.description} codeLink={work.codeLink} liveLink={work.liveLink} /></div>
            })
        }
    </div>
    <Link href='https://github.com/jay-kakkad-33' className='border p-2 rounded-full w-fit flex justify-center items-center gap-3 mx-auto hover:scale-[1.1] transition-all duration-200 hover:shadow-md'><Image src='./images/github.png' width={500} height={500} className='invert w-10' /> Visit my GitHub <ArrowLongRightIcon className='w-10 h-10' /></Link>
</section>
  )
}

export default WorkSection