import React, { useEffect, useState, useRef } from 'react'


export default function Brush(props) {
    let pixelLocation = 0
    let mouseDown = false;
    
    useEffect(() => {
        console.log('attaching event listener to brush with color: ' + props.currentColor)
        document.getElementById("canvas").addEventListener('mousedown', handleMouseClick );
        document.getElementById("canvas").addEventListener('mousemove', handleMouseMove );
        document.getElementById("canvas").addEventListener('mouseleave', handleMouseLeave );
        document.getElementById("canvas").addEventListener('mouseup', handleMouseUp );
        return function cleanup() {
            document.getElementById("canvas").removeEventListener('mousedown', handleMouseClick );
            document.getElementById("canvas").removeEventListener('mousemove', handleMouseMove );
            document.getElementById("canvas").removeEventListener('mouseleave', handleMouseLeave );
            document.getElementById("canvas").removeEventListener('mouseup', handleMouseUp );
        }
    }, [props.currentColor, props.size])

    let handleMouseMove = (e) => {
        e.preventDefault();
        if (mouseDown) {
            if (Math.floor(e.timeStamp) % 3 == 0) {
                console.log('painting')
                let below = document.elementFromPoint(e.clientX, e.clientY)
                below.style.backgroundColor = props.currentColor
            }
        }
    }

    let handleMouseUp = (e) => {
        console.log(mouseDown)
        mouseDown = false
    }

    let handleMouseLeave = (e) => {
        mouseDown = false
    }

    let handleMouseClick = async (e) => {
        e.preventDefault();
        mouseDown = true;
        let below = document.elementFromPoint(e.clientX, e.clientY)
        below.style.backgroundColor = props.currentColor
        if (props.size == 2) {
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
    }

    return null
}