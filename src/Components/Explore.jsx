import React from 'react'

export default function Explore({ hp, setHp, gold, setGold, weapon, setWeapon,changePage, changeHp, changeGold, changeWepon }) {
   
   
   
   
    return (

        // container 
        <div className='flex flex-col'>
    
    {/* </header> */}
    <div className='flex bg-zinc-400 justify-evenly p-3' > 
    {/* stats  */}
       <div className='flex flex-col gap-3 text-sm tracking-tighter text-center leading-[0.4rem]'>
       <p className='text-green-400'>HP: 100</p> 
       <p className='text-yellow-300'>Gold:100</p> 
       <p>Weapon: fist</p>
        </div> 
    {/* title  */}
        <div className='flex self-center '>
            <p className='text-[2rem]'>DragonSlayer</p>
        </div>
        {/* location  */}
        <div className='flex self-center '>Explore</div>
    </div>
    
    
    
    
    
    {/* body  */}
    <div className='flex flex-col bg-zinc-200'>
    <p className='flex p-10 text-center'>Greetings Explorer! Chose your path Wisely
    </p>
    
    {/* buttons  */}
    <div className='flex justify-evenly p-3'> 
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("explore")}>Fight</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("explore")} >Loot</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("explore")}  >Dragon</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> this is the result of your purchase</div>
    </div>
    
    
    
    
    
        </div>
      )
}
