import React from 'react'

export default function Btn(props) {
    let setClass = () => {
        if (props.width) {
            
            return "btnDiv triple"
        } else if (props.color) {
            
            return "btnDiv redBtn"
        } else{
            
            return "btnDiv"
        }
    }

    let dispAndFunc = (event) => {
        props.dispNum(event);
        if (props.funcBtn) {
            props.funcBtn(event);
        }
        
    }

    return (
        <div onClick = {dispAndFunc} className = {setClass()} >
            <h2>{props.content}</h2>
        </div>
    )
}
