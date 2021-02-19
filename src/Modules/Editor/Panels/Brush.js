import React, { useEffect, useState, useRef } from 'react'


export default function Brush(props) {
    let lastLocation = 0;
    let mouseDown = false;

    useEffect(() => {

        console.log('attaching event listener to brush with color: ' + props.currentColor)
        window.addEventListener('mousedown', handleMouseClick );
        window.addEventListener('mousemove', handleMouseMove );
        window.addEventListener('mouseleave', handleMouseUp );
        window.addEventListener('mouseup', handleMouseUp );

        return function cleanup() {
            window.removeEventListener('mousedown', handleMouseClick );
            window.removeEventListener('mousemove', handleMouseMove );
            window.removeEventListener('mouseleave', handleMouseUp );
            window.removeEventListener('mouseup', handleMouseUp );
        }
        
    }, [props.currentColor, props.size])

    const handleMouseMove = async (e) => {
        if (mouseDown) {
            if (Math.floor(e.timeStamp) % 3 === 0) {
                handleMouseClick(e)
            }
        } 
    }

    const handleMouseUp = (e) => {
        mouseDown = false
    }


    const handleMouseClick = async (e) => {
        if (e.target.classList.contains('pixel')) {
            console.log('painting')
            e.preventDefault();
            mouseDown = true;
            let below = document.elementFromPoint(e.clientX, e.clientY)
            if (below.classList.contains('pixel')) {      
                below.style.backgroundColor = props.currentColor
                if (props.size == 2) {
                    let location = JSON.parse(e.target.id)
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
        }
    }

    return null
}