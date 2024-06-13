import { useState } from "react"
import React from 'react'

export default function Town({ hp, setHp, gold, setGold, weapon, setWeapon, changePage}) {





    return (

        // container 
        <div className='flex flex-col'>
    
    {/* </header> */}
    <div className=' text-slate-100 flex bg-zinc-900 justify-between  p-7 min-h-[105px]'  > 
    {/* stats  */}
       <div className='flex flex-col gap-3 text-sm text-start leading-[0.4rem] text-align'>
       <p className='text-green-400'><i className="fa-solid fa-heart"></i> : {hp}</p> 
       <p className='text-yellow-300'><i className="fa-solid fa-coins"></i> :{gold}</p> 
       <p><i className="fa-solid fa-gun"></i> : {weapon}</p>
        </div> 
    {/* title  */}
        <div className='flex self-center '>
            <p className=' text-s sm:text-base md:text-xl lg:text-xxl'>DragonSlayer</p>
        </div>
        {/* location  */}
        <div className='flex self-center '>Town</div>
    </div>
    
    
    
    
    
    {/* body  */}
    <div className=' text-slate-200 flex flex-col bg-zinc-600'>
    <p className='flex text-center p-10'>Welcome to the Town. Your mision is to protect it from the draggon. here you can shop, explore, or work
    </p>
    
    {/* buttons  */}
    <div className='flex justify-evenly p-3'> 
        <button className=' text-blue-900 bg-yellow-500 w-1/5' onClick={() => changePage("explore")}>Explore</button>
        <button className=' text-blue-900 bg-yellow-500 w-1/5' onClick={() => changePage("shop")} >Shop</button>
        <button className=' text-blue-900 bg-yellow-500 w-1/5' onClick={() => changePage("work")} >Work</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> Good Luck!</div>
    </div>

    
    
    
    
        </div>
      )
}
