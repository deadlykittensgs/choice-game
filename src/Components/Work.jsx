import React from 'react'
import { useState } from 'react'


export default function Work({hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon }) {

const [report, setReport] = useState(null)









function workForFarmer() {
    let randomNumber = Math.floor(Math.random() * 50) +1  
    changeGold(randomNumber)
    setReport(`your daily wages are: ${randomNumber}`)
    changeHp(-2)
}

function workForButcher() {
    let randomNumber = Math.floor(Math.random() * 120) +1  
   
    if (randomNumber >20) {
        changeGold(randomNumber)
        setReport(`your daily wages are: ${randomNumber}`)
       }

    if (randomNumber < 20) {
        changeHp(-20)
        setReport("you got hurt at work -20Hp")
    }
    if (randomNumber === 20) {
        setReport("you were awarded a sword for your hard work!")
        setWeapon("sword")
    }

}


function workForMiller() {
    let randomNumber = Math.floor(Math.random() * 150) +1  
   
   if (randomNumber >20) {
    changeGold(randomNumber)
    setReport(`your daily wages are: ${randomNumber}`)
   }
   
    if (randomNumber < 20) {
        changeHp(-50)
        setReport("you got hurt at work -50Hp")
    }
    if (randomNumber === 20) {
        setReport("you were awarded a sword for your hard work!")
        setWeapon("sword")
    }

}




    return (

        // container 
        <div className='flex flex-1 flex-col'>
    
    {/* </header> */}
    <div className='flex bg-zinc-400 justify-evenly p-3' > 
    {/* stats  */}
       <div className='flex flex-col gap-3 text-sm tracking-tighter text-center leading-[0.4rem]'>
       <p className='text-green-400'>HP: {hp}</p> 
       <p className='text-yellow-300'>Gold: {gold}</p> 
       <p>Weapon: {weapon}</p>
        </div> 
    {/* title  */}
        <div className='flex self-center '>
            <p className='text-[2rem]'>DragonSlayer</p>
        </div>
        {/* location  */}
        
        <div className='flex flex-col self-center '>
        <button><i onClick={() => changePage("town")} className="fa-solid fa-house" ></i></button>
            <p>Work</p> 
        </div>
        
        
    </div>
    
    
    
    
    
    {/* body  */}
    <div className='flex flex-col bg-zinc-200'>
    <p className='flex p-10 text-center'>Welcome to work. Choose who to work for and hope for a good wage</p>
    
    {/* buttons  */}
    <div className='flex justify-evenly p-3'> 
        <button className='bg-yellow-500 w-1/5'onClick={() => workForFarmer()} >Farmer</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => workForButcher()}>Butcher</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => workForMiller()}>Miller</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> <p>{report}</p></div>
    </div>
    
    
    
    
    
        </div>
      )
}
