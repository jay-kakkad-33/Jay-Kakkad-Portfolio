import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xyzglvln");
  if (state.succeeded) {
    //   return <p className='bg-green-500'>Thanks for joining!</p>;
      return <p className='mx-auto my-10 p-5 w-full md:w-[80%] text-center text-wrap flex items-center justify-center text-md md:text-2xl rounded-xl'>Message sent!<br/>Thank you for contacting me.<br/>I will get back to you as soon as possible.</p>;
  }

  return (
    <form className='flex flex-col gap-5 bg-[#183b65] bg-opacity-20 p-5 w-full my-5 md:w-4/5 rounded-3xl text-sm md:text-xl' action='https://formspree.io/f/xyzglvln' onSubmit={handleSubmit}>
      <input id="name" type="text" name="name" placeholder='Your name' className='w-full rounded-full border bg-transparent py-3 px-5'/>
      <ValidationError prefix="Name" field="name" errors={state.errors}/>
      <input id="email" type="email" name="email" placeholder='Your email' className='w-full rounded-full border bg-transparent py-3 px-5'/>
      <ValidationError prefix="Email" field="email" errors={state.errors}/>
      <input id="contact" type="tel" name="contact" pattern='[6-9]{1}[0-9]{9}' placeholder='Your contact no.' className='w-full rounded-full border bg-transparent py-3 px-5'/>
      <ValidationError prefix="Email" field="email" errors={state.errors}/>
      <textarea placeholder='Your message'  className='w-full rounded-3xl border bg-transparent py-3 px-5' cols={5} rows={5} id="message" name="message"/>
      <ValidationError prefix="Message" field="message" errors={state.errors}/>
      <button type="submit" disabled={state.submitting } className='bg-[#183b65] text-xl md:text-3xl px-5 py-2 rounded-full font-light'>SEND</button>
    </form>
  );
}
export default ContactForm