import React from 'react'
import PortfolioItem, { IItem } from './PortfolioItem'
import "../../css/Portfolio.scss"
import {scItem} from "./Items"

export default function Portfolio() {
  return (
    <div className="portfolio">
        <PortfolioItem item={scItem}/>
    </div>
  )
}
