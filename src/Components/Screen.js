import React from 'react'

export default function Screen(props) {
    return (
        <div className= {props.clName}>
            {props.display}
        </div>
    )
}
