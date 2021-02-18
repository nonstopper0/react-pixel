import React, { useEffect, useState, useRef } from 'react'


export default function Brush(props) {

    // setup listener to listen for brush location
    useEffect(() => {
        console.log('attaching event listener to brush with color' + props.currentColor)
        document.getElementById("canvas").addEventListener('mousedown', handleClick );

        return function cleanup() {
            document.getElementById("canvas").removeEventListener('mousedown', handleClick );
        }
    })

    // const handleDrag = (e) => {
    //     if (Math.floor(e.timeStamp) % 10 === 0) {
    //         console.log(mouseDown, lastTime)
    //         if (mouseDown) {
    //             console.log('drawing')
    //             let below = document.elementFromPoint(e.clientX, e.clientY)
    //             if (below.classList.contains("pixel")) {
    //                 below.style.backgroundColor = color
    //             }
    //         }
    //     }
    //     if (lastTime == 0) {
    //          setLastTime(e.timeStamp)
    //     }

    // }

    let handleClick = (e) => {
        let below = document.elementFromPoint(e.clientX, e.clientY)
        if (below.classList.contains("pixel")) {
            below.style.backgroundColor = props.currentColor
        }
    }

    function log() {
        console.log(props.currentColor)
        return props.currentColor
    }

    return (
        <button onClick={()=> log()}>Here</button>
    )
}