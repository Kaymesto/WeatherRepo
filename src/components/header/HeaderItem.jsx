import React from 'react'

export const HeaderItem = (props) => {

    return <div className="header-item">
        <button type="button">{props.titre}</button>
    </div>
}