import React from 'react'

function Part1() {
  return (
   <div className=' w-full bg-green-500 p-4'>
        
        <div className='bg-yellow-400 flex flex-col p-12 gap-2'>
            <h1 className=' text-3xl font-semibold'>This is the title of the movie</h1>
            <div className=' opacity-90 mt-12 md:mt-24'>Shopping experience made simple and familiar by intergrating Macy's
             products with Tinder swipes!
             </div>
             <div>
                View Project on Git Hub
             </div>

             <span className=' mt-8 flex flex-col'>
                 <a href='/'>this is the link</a>
                 <a href='/'>this is the link</a>
             </span>
            </div>
   </div>
  )
}

export default Part1