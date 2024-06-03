import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Town from './Components/Town'
import Explore from './Components/Explore'
import Fight from './Components/Fight'
import Loot from './Components/Loot'
import Shop from './Components/Shop'
import Work from './Components/Work'
import Lost from './Components/Lost'
import Monster from './Components/Monster'
import Dragon from './Components/Dragon'




function App() {
  const [location, setLocation] = useState("town")
  const [hp, setHp] = useState(100)
  const [gold, setGold] = useState(50000)
  const [weapon, setWeapon] = useState("fist")
  const[monster, setMonster]=useState(null)
  const [monsterHp, setmonsterHp] = useState(1)



function changePage(place) {
  setLocation(place)
console.log(place)
}

function changeHp(change) {
  let currentHp = hp
  setHp(currentHp + change)
  console.log(hp)
}

function changeGold(change) {
  let currentGold = gold
  setGold(currentGold + change)
  console.log(gold)
}

function changeWepon(change) {
  let currentWeapon = weapon
  setGold(currentWeapon + change)
}


function conditionallyRender() {
  if (hp < 1){
    return(<Lost   changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon} />)
  }
  if (location === 'town') {
    return(<Town   changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon} />)
  }
  if (location === 'shop') {
    return(<Shop  changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon} />)
  }
  if (location === 'work') {
    return(<Work  changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon}   />)
  }
  if (location === 'explore') {
    return(<Explore setMonster={setMonster} setmonsterHp={setmonsterHp} changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon} />)
  }
  if (location === 'fight') {
    return(<Fight monsterHp={monsterHp} setmonsterHp={setmonsterHp}  monster={monster} setMonster={setMonster} changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon} />)
  }
  if (location === 'loot') {
    return(<Loot  changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon} />)
  }
  if (location === 'monster') {
    return(<Monster monsterHp={monsterHp} setmonsterHp={setmonsterHp} monster={monster} setMonster={setMonster} changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon} />)
  }

  if (location === 'dragon') {
    return(<Dragon monsterHp={monsterHp} setmonsterHp={setmonsterHp} monster={monster} setMonster={setMonster} changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon} />)
  }

  if (location === 'dragon') {
    return(<Winner monsterHp={monsterHp} setmonsterHp={setmonsterHp} monster={monster} setMonster={setMonster} changeHp={changeHp} changeGold={changeGold} changePage={changePage} changeWepon={changeWepon}   hp={hp} setHp={setHp} gold={gold} setGold={setGold} weapon={weapon} setWeapon={setWeapon} />)
  }
  

}



  return (
    <section className='flex flex-col h-screen w-screen'>
    <Header/>
    <div className=' bg-zinc-700 flex flex-1 justify-center items-center'>
    <div className='flex h-3/6 w-3/4 justify-center items-center'>
    {conditionallyRender()}
    </div> 
    </div>
    <Footer/>
      
    </section>
  )
}

export default App
