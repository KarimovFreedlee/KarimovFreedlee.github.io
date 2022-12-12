import React from 'react'
import Imgs from './Imgs'

export interface IItem {
    about: string,
    imgs: string[],
    name: string
    link?: string
}

export interface IPortfolioItemProps {
    item: IItem
}

export default function ({item}: IPortfolioItemProps) {
  return (
    <div className="portfolio__item">
        <div className="item__about">
            <h2>{item.name}</h2>
            <p>
                {item.about}
            </p>
        </div>
        <Imgs imgs={item.imgs}/>
    </div>
  )
}
