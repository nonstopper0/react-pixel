import React, { useEffect, useState, useRef } from 'react'


export default function Brush(props) {
    // setup listener to listen for brush color and location
    useEffect(() => {
        console.log('attaching event listener to brush with color: ' + props.currentColor)
        document.getElementById("canvas").addEventListener('mousedown', handleClick );

        return function cleanup() {
            document.getElementById("canvas").removeEventListener('mousedown', handleClick );
        }
    }, [props.currentColor])

    let handleClick = (e) => {
        let below = document.elementFromPoint(e.clientX, e.clientY)
        below.style.backgroundColor = props.currentColor
    }

    return null
}