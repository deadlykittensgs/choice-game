import React from 'react'

export default function Lost({hp, setHp, gold, setGold, weapon, setWeapon, changePage, changeHp, changeGold, changeWepon }) {

function reset() {
    setGold(500)
     setHp(100)
     changePage("town")
     setWeapon("fist")
}



  return (
    <div className=' p-20 bg-slate-900/90 flex flex-col items-center'>

<h1 className='text-[5rem] text-red-600 '>You Lose</h1>
<p className=' text-red-600 bg-slate-900/0'>You have been slain, better luck next time</p>
<button className='bg-slate-300 rounded p-2 m-10 hover:bg-red-400' onClick={() => reset()} >Restart</button>



    </div>
  )
}
