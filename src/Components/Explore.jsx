import React from 'react'

export default function Explore({ setMonster,setmonsterHp, hp, setHp, gold, setGold, weapon, setWeapon,changePage, changeHp, changeGold, changeWepon }) {
   


    function fightTheDragon() {
        setMonster("dragon")
        setmonsterHp(10000) 
        changePage("dragon")
    }
   
  
    return (

        // container 
        <div className='flex flex-col'>
    
    {/* </header> */}
    <div className='flex bg-zinc-400 justify-evenly p-3' > 
    {/* stats  */}
       <div className='flex flex-col gap-3 text-sm tracking-tighter text-center leading-[0.4rem]'>
       <p className='text-green-400'><i className="fa-solid fa-heart"></i> : {hp}</p> 
       <p className='text-yellow-300'><i className="fa-solid fa-coins"></i> :{gold}</p> 
       <p><i class="fa-solid fa-gun"></i> : {weapon}</p>
        </div> 
    {/* title  */}
        <div className='flex self-center '>
            <p className='text-[2rem]'>DragonSlayer</p>
        </div>
        {/* location  */}
       
        <div className='flex flex-col self-center '>
        <button><i onClick={() => changePage("town")} className="fa-solid fa-house" ></i></button>
            <p>Explore</p> 
        </div>
        
        
    </div>
    
    
    
    
    {/* body  */}
    <div className='flex flex-col bg-zinc-200'>
    <p className='flex p-10 text-center'>Greetings Explorer! Chose your path Wisely
    </p>
    
    {/* buttons  */}
    <div className='flex justify-evenly p-3'> 
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("fight")}>Fight</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => changePage("loot")} >loot</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => fightTheDragon() }>Dragon</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> this is the result of your purchase</div>
    </div>
    
    
    
    
    
        </div>
      )
}
