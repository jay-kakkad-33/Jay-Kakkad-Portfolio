import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({links,onclick}) => {
  return (
    <ul className='flex flex-col justify-center items-center gap-10 w-full mx-auto'>{
        links.map((link,index)=>{
            return <li key={index}><NavLink title={link.title} href={link.href} onclick={onclick} /></li>
        })}
    </ul>
  )
}

export default MenuOverlay