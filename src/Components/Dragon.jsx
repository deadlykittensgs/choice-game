import React from 'react'
import { useState } from 'react';

export default function Dragon({setmonsterHp, monsterHp, setMonster, monster, hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon }) {


    // if(monster === "dragon" && monsterHp < 0 )
    // {
    //     changePage(winner)
    // }





    const [response, setResponse] = useState("test")  
    let weaponDamage = 0;
    let battleResults = 0;
    let attackDamage = 0;



    function attack(dodge) {
  
    
       
        let weaponDamage = 0;
        let battleResults = 0;
        let attackDamage = 0;
    
    
    let dodgeChance = Math.floor(Math.random() * 10) +1 
    
    if(dodgeChance > dodge) {
        setResponse(`The ${monster} dodged your attack`) 
    }
    
    
    if (weapon === "fist"){
        attackDamage = Math.floor(Math.random() * 20) +1
     battleResults = monsterHp - attackDamage
     setmonsterHp(battleResults)
     setResponse(`You hit the ${monster} for ${attackDamage}hp`)
    }
      if (weapon === "stick")
      attackDamage = 40
       battleResults = monsterHp - attackDamage
      setmonsterHp(battleResults)
      setResponse(`You hit the ${monster} for ${attackDamage}hp`)
    }
    
    if (weapon === "dagger") {
        attackDamage = Math.floor(Math.random() * 20) +1
        battleResults = monsterHp - attackDamage
        setmonsterHp(battleResults)
        setResponse(`You hit the ${monster} for ${attackDamage}hp`)
    }
    
    if (weapon === "sword") {
        attackDamage = Math.floor(Math.random() * 20) +1
        battleResults = monsterHp - attackDamage
        setmonsterHp(battleResults)
        setResponse(`You hit the ${monster} for ${attackDamage}hp`)
    }
    
    
      if (weapon === "dragonslayer") {
        attackDamage = 100
        battleResults = monsterHp - attackDamage
        setmonsterHp(battleResults)
        setResponse(`You hit the ${monster} for ${attackDamage}hp`)
        
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
            <p>Dragon</p> 
        </div>
        
        
    </div>
    
    
    
    
    
    {/* body  */}
    <div className='flex flex-col bg-zinc-200'>
    <p className='flex p-10 text-center'>
        You have challenged the dragon {monsterHp}. You can not flee. you must win or die.
    </p>
    
    {/* buttons  */}
    <div className='flex justify-evenly p-3'> 
        <button className='bg-yellow-500 w-1/5' onClick={() => attack()} >fight</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => attack()} >dodge</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> {response}</div>
    </div>
    
    
    
    
    
        </div>
      )
}


