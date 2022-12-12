import React from 'react'
import "../css/Home.scss"
import img from "../assets/IMG_9322.jpg"

export default function Home() {
  return (
    <div className="home">
        <img className="home__img" src={img}/>
        <h3 className="home__name">Vladislav Karimov</h3>
        <h1 className="home__h1">Frontend developer</h1>
    </div>
  )
}
