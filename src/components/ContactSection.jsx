'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section className='w-full min-h-screen flex flex-col md:flex-row p-10 pt-20 md:p-32' id='contact'>
      <div className='w-full md:w-1/2 flex flex-col' >
        <h1 className='text-5xl md:text-7xl' >Let's Connect</h1>
        <span className='text-xl md:text-2xl m-2' >Make something together</span>
        <h3 className='text-2xl md:text-4xl my-10 font-light' >You can follow me on :</h3>
        <div id='social' className='flex'>
          <Link href='https://www.linkedin.com/in/jay--kakkad' className='w-full'><Image src='/images/linkedin.png' width={500} height={500} className='p-5 md:p-12 hover:scale-[1.1] transition-all duration-200'/></Link>
          <Link href='https://www.github.com/jay-kakkad-33' className='w-full'><Image src='/images/github1.png' width={500} height={500} className='p-5 md:p-12 hover:scale-[1.1] transition-all duration-200'/></Link>
          <Link href='https://www.instagram.com/_jay._.kakkad' className='w-full'><Image src='/images/instagram.png' width={500} height={500} className='invert p-5 md:p-12 hover:scale-[1.1] transition-all duration-200'/></Link>
        </div>
        <Link href='https://drive.google.com/file/d/1jk20YqzqwNWcaZF6i4WVDJUCarwh2sKA/view?usp=sharing' title='Download Resume' className='text-2xl md:text-4xl font-light border rounded-full p-2 flex gap-5 justify-center items-center hover:bg-white hover:text-[#282148] transition-all duration-200'>Resume<ArrowDownTrayIcon className='w-7 md:w-9' /> </Link>
      </div>
      <div className='w-full md:w-1/2 flex justify-end'>
        {/* <form className='flex flex-col gap-5 bg-[#183b65] bg-opacity-20 p-5 w-full my-5 md:w-4/5 rounded-3xl text-sm md:text-xl'>
          <input type='text' placeholder='Your name' className='w-full rounded-full border bg-transparent py-3 px-5' />
          <input type='email' placeholder='Your email' className='w-full rounded-full border bg-transparent py-3 px-5' />
          <input type='tel' pattern='[6-9]{1}[0-9]{9}' placeholder='Your contact no.' className='w-full rounded-full border bg-transparent py-3 px-5' />
          <textarea placeholder='Your message'  className='w-full rounded-3xl border bg-transparent py-3 px-5' cols={5} rows={5} id="message"
        name="message" />
          <input type='submit' value='SEND' className='bg-[#183b65] text-xl md:text-3xl px-5 py-2 rounded-full font-light' />
        </form> */}
        <ContactForm/>
      </div>
    </section>
  )
}

export default ContactSection