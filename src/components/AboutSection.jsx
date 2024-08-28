import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='w-full min-h-screen flex flex-col md:flex-row justify-between items-center p-10 pt-20 md:p-32' id='about'>
      <Image src='/images/coder.jpg' width={1000} height={1000} className='w-full md:w-1/3 md:h-1/3 rounded-full' />
      <div className='w-full md:w-2/3 mx-7'>
        <h1 className='text-5xl md:text-7xl my-4 md:text-left text-center'>About Me</h1>
        <p className='text-md md:text-2xl font-light text-justify'>As a programming enthusiast, I thrive on solving problems
          and constructing elegant solutions. My logical thinking
          skills allow me to approach challenges
          with enthusiasm rather than headache. Additionally, I’ve
          dipped my toes into the world of JavaScript, which adds
          an exciting layer to my skill set.
        </p>
        <div className='flex justify-center md:justify-start gap-3 mt-5'>
          <Image src='/images/java-BG.png' width={500} height={500} className='w-20 bg-transparent' />
          <Image src='/images/python-Bg.png' width={500} height={500} className='w-20 bg-transparent' />
          <Image src='/images/js-BG.png' width={500} height={500} className='w-20 bg-transparent' />
        </div>
      </div>
    </section>
  )
}

export default AboutSection