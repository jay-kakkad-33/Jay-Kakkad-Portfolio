import React from 'react'

const CategoryButton = ({name,onClick,isSelected}) => {
    const seperatorStyle = 'border-r-2 border-r-white';
  return (
    <button onClick={()=>onClick(name)} className={`px-4 md:px-5 sm:px-10 w-full text-sm sm:text-xl text-center ${isSelected?'text-white':'text-slate-700'} transition-colors duration-200 hover:text-slate-200`}>{name}</button>  
  )
}

export default CategoryButton