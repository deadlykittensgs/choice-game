import React from 'react'
export default function Winner({hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon }) {

    function reset() {
        setGold(500)
         setHp(100)
         changePage("town")
         setWeapon("fist")
    }
    
    
    
      return (
        <div className='flex flex-col items-center'>
    
    <h1 className='text-[5rem] text-green-600'>You Win</h1>
    <p className=' text-red-600'>You have slain the dragon!</p>
    <button className='bg-slate-300 rounded p-2 m-10 hover:bg-green-400' onClick={() => reset()} >Restart</button>
    
    
    
        </div>
      )
    }
    