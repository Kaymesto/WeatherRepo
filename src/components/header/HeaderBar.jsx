import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { HeaderItem } from './HeaderItem'

export const HeaderBar = () => {
    return <div className="header-bar">
        <Link to="/"> <HeaderItem titre="Home" /> </Link>
        <Link to="/weatherToday"><HeaderItem titre="Afficher la météo actuelle d'une ville" /> </Link>
        <Link to="/weatherToCome"><HeaderItem titre="Afficher la météo à venir d'une ville" /> </Link>
    </div>
}

