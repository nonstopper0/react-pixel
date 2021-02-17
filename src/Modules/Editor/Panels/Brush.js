import React, { useEffect, useState } from 'react'


export default function Brush() {
    const [color, setColor] = useState('#bbbbbb')
    const [mouseDown, click] = useState(false)
    const [lastTime, setLastTime] = useState(0)

    // setup listener to listen for brush location
    useEffect(() => {
        document.addEventListener('mousedown', () => click(true) )
        document.addEventListener('mouseup', () => click(false) )
        document.addEventListener('mousemove', handleDrag )

        return function cleanup() {
            document.removeEventListener('mousedown', handleClick )
            document.removeEventListener('mousemove', handleDrag )
        }
    }, [])

    const handleDrag = (e) => {
        if (Math.floor(e.timeStamp) % 10 === 0) {
            console.log(mouseDown, lastTime)
            if (mouseDown) {
                console.log('drawing')
                let below = document.elementFromPoint(e.clientX, e.clientY)
                if (below.classList.contains("pixel")) {
                    below.style.backgroundColor = color
                }
            }
        }
        if (lastTime == 0) {
             setLastTime(e.timeStamp)
        }

    }
    const handleClick = (e) => {
        console.log('clicked')
        click((previousState) => !previousState)
        let below = document.elementFromPoint(e.clientX, e.clientY)
        if (below.classList.contains("pixel")) {
            below.style.backgroundColor = color
        }
    }


    return(
        <div>Brush
            <button onClick={()=> console.log("hello")}></button>
        </div>
    )
}