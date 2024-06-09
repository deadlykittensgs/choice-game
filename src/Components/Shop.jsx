import React from 'react'
import { useState } from 'react'

export default function Shop({hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon, index,setIndex }) {



const [response, setResponse] = useState(null)

function buyHp() {
    if (gold < 50) {
        setResponse("you do not have sufficient funds")
        return
    }
    setHp( hp + 10)
    setGold( gold -50)
    setResponse(`your have purchased 10HP`)
}

function buyLuck() {
    if (gold < 50) {
        setResponse("you do not have sufficient funds")
        return
    }
    setGold( gold -50)
    setResponse(`your have purchased 15 Luck`)
}

function buyWeapon() {


    let declaration = weapon
    if (gold < 1000) {
        setResponse("you do not have sufficient funds")
        return
    }

    if (index === 1) {
        setGold( gold -1000)
        setWeapon("stick")
        setIndex(2)
        setResponse(`you have purchased the stick`)
    
    }
    if (index === 2) {
        setGold( gold -1000)
        setWeapon("dagger")
        setIndex(3)
        setResponse(`you have purchased the dagger`)
    }
    if (index === 3) {
        setGold( gold -1000)
        setWeapon("sword")
        setIndex(4)
        setResponse(`you have purchased the sword`)
    }
    if (index === 4) {
        setGold( gold -1000)
        setWeapon("dragonslayer")
        setIndex(5)
        
        setResponse(`you have purchased the dragonslayer`)
    }
    if (index === 5) {
        setResponse(`you have the max weapon`)
      return
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
            <p>Shop</p> 
        </div>
        
        
    </div>





{/* body  */}
<div className='flex flex-col bg-zinc-200'>
<p className='flex p-10'>Welcome to the shop. here you can buy weapons health and perks to help you on your quest to defeat the dragon!
</p>

{/* buttons  */}
<div className='flex justify-evenly p-3'> 
    <button className='bg-yellow-500 w-1/5' onClick={() => buyHp()}>HP</button>
    <button className='bg-yellow-500 w-1/5' onClick={() => buyWeapon()} >Weapon</button>
    <button className='bg-yellow-500 w-1/5' onClick={() => buyLuck()} >Luck</button>
</div>
<div className='flex justify-evenly p-3'> 
    <button className=' w-1/5'>50g</button>
    <button className='w-1/5' >1000g</button>
    <button className='w-1/5' >50g</button>
</div>

<div className='flex align-center justify-center p-10'> {response}</div>
</div>





    </div>
  )
}
