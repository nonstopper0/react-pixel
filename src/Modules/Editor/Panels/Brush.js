import React, { useEffect, useState } from 'react'


export default function Brush(props) {
    const [color, setColor] = useState(props.currentColor);

    // setup listener to listen for brush location
    useEffect(() => {
        document.getElementById("canvas").addEventListener('mousedown', handleClick );

        return function cleanup() {
            document.getElementById("canvas").removeEventListener('mousedown', handleClick );
        }
    }, [])

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

    const handleClick = (e) => {
        console.log('clicked')
        let below = document.elementFromPoint(e.clientX, e.clientY)
        if (below.classList.contains("pixel")) {
            console.log(props.currentColor)
            below.style.backgroundColor = props.currentColor
        }
    }


    return null
}