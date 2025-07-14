import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmit}) {
  const {register,handleSubmit ,reset} = useForm(); 
  const handleForm = (data)=>{
    handleFormSubmit(data)
    reset();
  }                                       
  return (
    <div className='mt-20 flex justify-center gap-10 '>
      <form className='flex gap-10 ' action="" onSubmit={handleSubmit(handleForm )}>
        <input required className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white' type="url"   placeholder='image url '{...register("url")}/>
        <input required className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white' type="text" placeholder='name' {...register("name")} />
        <input required className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white' type="text" placeholder='email' {...register("email")} />
        <input required className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white' type="text" placeholder='about' {...register("about")} />
        <input required className='px-3 py-1 bg-blue-600 rounded-md font-semibold text-white' type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Form;
