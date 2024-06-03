import React from 'react'
import { useState } from 'react'

export default function Shop({hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon }) {


const [i, seti] = useState(1)
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
    if (gold < 1000) {
        setResponse("you do not have sufficient funds")
        return
    }

    if (i === 1) {
        setGold( gold -1000)
        setWeapon("stick")
        seti(2)
    
    }
    if (i === 2) {
        setGold( gold -1000)
        setWeapon("dagger")
        seti(3)
    }
    if (i === 3) {
        setGold( gold -1000)
        setWeapon("sword")
        seti(4)
    }
    if (i === 4) {
        setGold( gold -1000)
        setWeapon("dragonslayer")
        seti(5)
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
