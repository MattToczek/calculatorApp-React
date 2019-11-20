import React from 'react'

export default function Screen(props) {
    console.log(props.display);
    return (
        
        
        <div className= {props.clName}>
            {props.display}
        </div>
    )
}
