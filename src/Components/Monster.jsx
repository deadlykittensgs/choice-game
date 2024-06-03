import React, { useState } from 'react'

export default function monster({monster, setMonster, monsterHp, setmonsterHp, hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon }) {
   
    



const [response, setResponse] = useState(`The ${monster} is waiting`)
const [escape, setEscape] = useState(null)






function attack(dodge) {
    setEscape(null)
    
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
  attackDamage = Math.floor(Math.random() * 40) +1
   battleResults = monsterHp - attackDamage
  setmonsterHp(battleResults)
  setResponse(`You hit the ${monster} for ${attackDamage}hp`)
}

if (weapon === "dagger") {
    attackDamage = Math.floor(Math.random() * 80) +1
    battleResults = monsterHp - attackDamage
    setmonsterHp(battleResults)
    setResponse(`You hit the ${monster} for ${attackDamage}hp`)
}

if (weapon === "sword") {
    attackDamage = Math.floor(Math.random() * 160) +1
     battleResults = monsterHp - attackDamage
    setmonsterHp(battleResults)
    setResponse(`You hit the ${monster} for ${attackDamage}hp`)
}


  if (weapon === "dragonslayer") {
    attackDamage = Math.floor(Math.random() * 350) +1
    attackDamage = 100
    battleResults = monsterHp - attackDamage
    setmonsterHp(battleResults)
    setResponse(`You hit the ${monster} for ${attackDamage}hp`)
    
  }



function flee() {
    let fleeAttempt = Math.floor(Math.random() * 10) +1

if (fleeAttempt < 8) {
console.log("you escaped")
console.log(fleeAttempt);
setResponse(`You outrun the ${monster} and escaped`)
setEscape("escape")


} 
if (fleeAttempt > 8) {
setHp(hp -10)
setEscape(null)
setResponse("you tripped and fell losing 10 hp and failed ot escape")
}
}
// function befriend() {


// console.log("a")

// }


    
    return (

        // container 
        <div className='flex flex-col'>
    
    {/* </header> */}
    <div className='flex bg-zinc-400 justify-evenly p-3' > 
    {/* stats  */}
       <div className='flex flex-col gap-3 text-sm tracking-tighter text-center leading-[0.4rem]'>
       <p className='text-green-400'>HP: {hp}</p> 
       <p className='text-yellow-300'>Gold:{gold}</p> 
       <p>Weapon: fist</p>
        </div> 
    {/* title  */}
        <div className='flex self-center '>
            <p className='text-[2rem]'>DragonSlayer</p>
        </div>
        {/* location  */}
        <div className='flex flex-col self-center '>
        <button><i onClick={() => changePage("town")} className="fa-solid fa-house" ></i></button>
            <p>Monster</p> 
        </div>
        
        
    </div>
    
    
    
    {/* body  */}
    <div className='flex flex-col bg-zinc-200'>
    <p className='flex p-10 text-center'>
        You are fighting the {monster} with {monsterHp} HP. chose your next move.
    </p>
    
    {/* buttons  */}
    <div className='flex justify-evenly p-3'> 
        <button className='bg-yellow-500 w-1/5' onClick={() => attack(8)} >Attack</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => flee()} >Flee</button>
        <button className='bg-yellow-500 w-1/5' onClick={() => befriend() } >befriend</button>
    </div>
    
    <div className='flex align-center justify-center p-10'> {response} <button onClick={ () => changePage("town")} className='bg-yellow-500 rounded'>{escape}</button></div>
    </div>
    
    
    
    
    
        </div>
      )
}

