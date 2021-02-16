import React, { useEffect } from 'react'


export default function Brush() {

    // setup listener to listen for brush location
    useEffect(() => {
        document.addEventListener('mousedown', handleMouse )

        return function cleanup() {
            document.removeEventListener('mousedown', handleMouse )
        }
    }, [])

    function handleMouse(e) {
        let below = document.elementFromPoint(e.clientX, e.clientY)
        if (below.classList.contains("pixel")) {
            below.style.backgroundColor = "black"
        }
    }


    return(
        <div>Brush</div>
    )
}