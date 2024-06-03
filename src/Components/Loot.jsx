import React from 'react'
import { useState } from 'react'

export default function Loot({ hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon }) {
   
    const [report, setReport] = useState(null)
function explore(location) {


    let randomNumber = Math.floor(Math.random() * location) +1  
   
   if (randomNumber >20) {
    changeGold(randomNumber)
    setReport(`you found ${randomNumber}`)
   }
   
    if (randomNumber < 20) {
        changeHp(-50)
        setReport("you got hurt exploring  -50Hp")
    }
    if (randomNumber === 20) {
        setReport("you were awarded a sword for your hard work!")
        setWeapon("sword")
    }

}
   
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
        <button className='bg-yellow-500 w-1/5' onClick={() => explore(160)}>meadow</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => explore(80)} >cliff</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => explore(40)}>Castle</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> {report}</div>
    </div>
    
    
    
    
    
        </div>
      )
}
