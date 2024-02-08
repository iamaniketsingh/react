import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
 

  return (
    <div className='background flex flex-col gap-8 items-center min-h-screen '>
      <h1 className='bg-white font-semibold text-3xl  w-11/12
      rounded-lg  text-center mt-[30px]  p-[10px]
     '>
        RANDOM GIFS</h1>

      <div className='flex flex-col gap-10 items-center w-full'>
        <Random />
        <Tag/>
      </div>
     
    </div>
  )
}

export default App
