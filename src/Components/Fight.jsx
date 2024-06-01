import React from 'react'

export default function Fight({  hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon }) {
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
        <div className='flex self-center '>Fight</div>
    </div>
    
    
    
    
    
    {/* body  */}
    <div className='flex flex-col bg-zinc-200'>
    <p className='flex p-10 text-center'>
        Chose your opponent! The larger the opponent the bigger chance for gold drops or Loot
    </p>
    
    {/* buttons  */}
    <div className='flex justify-evenly p-3'> 
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("explore")} >Goblin</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("explore")} >Giant</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("explore")} >Randy</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> Who will you slay?</div>
    </div>
    
    
    
    
    
        </div>
      )
}
