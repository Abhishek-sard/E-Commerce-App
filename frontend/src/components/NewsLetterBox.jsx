import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();

    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className="text-gray-400 mt-3">
            Join our newsletter to stay updated with the latest trends and exclusive offers.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-4 mt-6 m-auto'>

            <input className='w-full sm:flex-1 outline-none border border-gray-300 p-2 rounded-md' type="email" placeholder='Enter your email' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 '>SUBSCRIBE</button>
        </form>

    </div>
  )
}

export default NewsLetterBox
