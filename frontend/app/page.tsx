'use client'

import { useState } from "react"
import { Cake, ApiResponse } from "./types"
import styles from './page.module.css'

export default function Home(){
  const [nev, setName] = useState(' ') //Üres
  const [kaloria, setCalories] = useState(' ')
  const [ar, setPrice] = useState(' ')
  const [cakes, setCakes] = useState<Cake[]>([]) //Tömb

  async function loadCakes() {                                          //rakattintuk a suti betoltesre ez aktiválódik
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cakes`) //ez a valtozo tartalmazza h h lehet elerni
    const data: ApiResponse = await res.json()                          //ez tartalmazza az infokat majd jsonban jeleniti meg
    setCakes(data.data||[])                                             //a kapott adatot betolti a cakesbe ha nem sikerult ures tombot jelenit meg
  }

  async function addCake(){                                              //kuldes gombra ranyomunk ez aktivalodik
  
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cakes`,{  //backendel felveszi a kapcsolatot
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        nev: nev,
        kaloria: Number(kaloria) ,
        ar: Number(ar)
      })
     }) 
    setName(' ')                                                          //vegen uritse ki
    setCalories(' ')
    setPrice(' ')
  }
  return(
    <div className={styles.container}>
      <h1>🧁Sütemény bolt🧁</h1>
      <input
      placeholder='Sütemény neve🍰'
      value={nev}
      onChange={(e)=>setName(e.target.value)}
      />
            <input
      placeholder="Kalória🐷"
      value={kaloria}
      onChange={(e)=>setCalories(e.target.value)}
      />
               <input
      placeholder="Ár (Ft) 💵"
      value={ar}
      onChange={(e)=>setPrice(e.target.value)}
      />
     <button onClick={addCake}>💅Küldés💅</button>
     <button onClick={loadCakes}>Lekérdezés🌷</button>
     <div className={styles.list}>
      {cakes.map((cake)=>(
        <div key={cake.id} className={styles.card}>
          <strong>🎂{cake.nev}🎂</strong>
          <div>Kalória: {cake.kaloria}</div>
          <div>Ár: {cake.ar}</div>
        </div>
      ))}
     </div>
    </div>
  )

  
}