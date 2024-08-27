import React from 'react'
import Link from 'next/link'

const NavLink = ({title,href,onclick}) => {
  return (
    <Link href={href} className='py-2 px-3 border border-white rounded-full text-sm' onClick={onclick}>{title}</Link>
  )
}

export default NavLink