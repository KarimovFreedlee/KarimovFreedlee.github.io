import React from 'react'
import "../../css/Imgs.scss"

interface IImgsProps {
    imgs: string[]
}

export default function ({imgs}: IImgsProps) {
  return (
    <div className="imgs">
        <div className="imgs__arrow arrow-left"></div>
        {imgs.map((item,key) => {
            return <img className="imgs__img" src={item} />
        })}
        <div className="imgs__arrow arrow-right"></div>
    </div>
  )
}
