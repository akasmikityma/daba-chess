import React from 'react'
import { useNavigate } from 'react-router-dom'
const Landing = () => {
    const navigate=useNavigate();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-800 min-h-screen p-20 justify-center gap-4'>
        <div>
            <img src="LandingPageBoard.png" alt="" className='w-full border-2 border-yellow-300 rounded-lg'/>
        </div>
        <div className='flex flex-col gap-6 items-center' >
            <h3 className='mt-10 text-white font-extrabold text-2xl px-4 text-center'>Play Chess Online on the Worlds no nth Site </h3>
            <button className='p-8 text-white font-extrabold text-xl bg-green-500 w-2/3 rounded-lg border-2 border-yellow-400' onClick={()=>{
                navigate('/game')
            }}>Play Online</button>
        </div>
    </div>
  )
}

export default Landing