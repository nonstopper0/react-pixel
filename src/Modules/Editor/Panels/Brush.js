import React, { useEffect, useState, useRef } from 'react'


export default function Brush(props) {
    let pixelLocation = 0
    // setup listener to listen for brush color and location
    useEffect(() => {
        console.log('attaching event listener to brush with color: ' + props.currentColor)
        document.getElementById("canvas").addEventListener('mousedown', handleClick );
        return function cleanup() {
            document.getElementById("canvas").removeEventListener('mousedown', handleClick );
        }
    }, [props.currentColor, props.size])

    let handleClick = async (e) => {
        let below = document.elementFromPoint(e.clientX, e.clientY)
        below.style.backgroundColor = props.currentColor
        let location = await JSON.parse(e.target.id)
        console.log(location)
        console.log(e.target.id)
        pixelLocation = location;
        let test = document.getElementById(`[3, 3]`)
        let right1 = document.getElementById(`[${location[0]}, ${location[1]+1}]`)
        let left1 = document.getElementById(`[${location[0]}, ${location[1]-1}]`)
        let top1 = document.getElementById(`[${location[0]+1}, ${location[1]}]`)
        let bottom1 = document.getElementById(`[${location[0]-1}, ${location[1]}]`)
        if (right1) { right1.style.backgroundColor = props.currentColor }
        if (left1) { left1.style.backgroundColor = props.currentColor }
        if (top1) { top1.style.backgroundColor = props.currentColor }
        if (bottom1) { bottom1.style.backgroundColor = props.currentColor }
    }

    return null
}