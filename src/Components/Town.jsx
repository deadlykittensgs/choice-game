import { useState } from "react"
import React from 'react'

export default function Town({ hp, setHp, gold, setGold, weapon, setWeapon, changePage}) {





    return (

        // container 
        <div className='flex flex-col'>
    
    {/* </header> */}
    <div className='flex bg-zinc-400 justify-evenly p-3' > 
    {/* stats  */}
       <div className='flex flex-col gap-3 text-sm tracking-tighter text-center leading-[0.4rem]'>
       <p className='text-green-400'>HP: {hp}</p> 
       <p className='text-yellow-300'>Gold:{gold}</p> 
       <p>Weapon: {weapon}</p>
        </div> 
    {/* title  */}
        <div className='flex self-center '>
            <p className='text-[2rem]'>DragonSlayer</p>
        </div>
        {/* location  */}
        <div className='flex self-center '>Town</div>
    </div>
    
    
    
    
    
    {/* body  */}
    <div className='flex flex-col bg-zinc-200'>
    <p className='flex text-center p-10'>Welcome to the Town. Your mision is to protect it from the draggon. here you can shop, explore, or work
    </p>
    
    {/* buttons  */}
    <div className='flex justify-evenly p-3'> 
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("explore")}>Explore</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("shop")} >Shop</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("work")} >Work</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> Good Luck!</div>
    </div>

    
    
    
    
        </div>
      )
}
