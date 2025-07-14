import React from 'react'
import Card from "./Card"
function Cards({users,handleRemove}) {
  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[23.5vw] overflow-y-auto'>
     {users.map((item,index)=>{
       return  <Card user={ item}  handleRemove={handleRemove} id={index} key={index }/>
     })}
    </div>
  )
}

export default Cards
