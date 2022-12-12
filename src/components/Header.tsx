import React from 'react'
import "../css/Header.scss"
import { sceneSlice, TPage } from '../store/reducers/PageReducer'
import { useAppDispatch } from '../store/store'

export default function () {
    const dispatch = useAppDispatch()
    const {setPage} = sceneSlice.actions

    function handleClick(value: TPage) {
        dispatch(setPage(value))
    }

    return (
    <div className="header">
        <ul className="header__list">
            <li className="list__element" onClick={() => handleClick("home")}>Home</li>
            <li className="list__element" onClick={() => handleClick("about")}>About</li>
            <li className="list__element" onClick={() => handleClick("portfolio")}>Portfolio</li>
            <li className="list__element" onClick={() => handleClick("contacts")}>Contacts</li>
        </ul>
    </div>
  )
}
