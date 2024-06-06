import React from 'react'
import { useState } from 'react'

export default function Loot({ hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon }) {
   
    const [report, setReport] = useState(null)



function explore(location, chance) {


    let randomNumber = Math.floor(Math.random() * 100) +1  
   
   if (randomNumber >chance) {
    changeGold(randomNumber * location)
    setReport(`you found ${randomNumber * location}`)
   }
   
    if (randomNumber < chance) {
        changeHp(-50)
        setReport("you got hurt exploring  -50Hp")
    }
    if (randomNumber === chance) {
        setReport("you were awarded a sword for your hard work!")
        setWeapon("sword")
        setIndex(4)
    }

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
            <p>loot</p> 
        </div>
        
        
    </div>
    
    
    
    
    {/* body  */}
    <div className='flex flex-col bg-zinc-200'>
    <p className='flex p-10 text-center'>Greetings Explorer! Chose your path Wisely
    </p>
    
    {/* buttons  */}
    <div className='flex justify-evenly p-3'> 
        <button className='bg-yellow-500 w-1/5' onClick={() => explore(1, 20)}>meadow</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => explore(3, 50)} >cliff</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => explore(4, 70)}>Castle</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> {report}</div>
    </div>
    
    
    
    
    
        </div>
      )
}
