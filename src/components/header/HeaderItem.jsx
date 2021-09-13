import React from 'react'

export const HeaderItem = (props) => {
    console.log(props)

    return <div className="header-item">
        <button type="button">{props.titre}</button>
    </div>
}