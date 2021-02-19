import React, { useEffect, useState, useRef } from 'react'


export default function Brush(props) {

    const [lastStroke, setLastStroke] = useState(false);
    let mouseDown = false;
    let currentStroke = [];
    let lastPoint = false;

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

        if (!mouseDown) { 
            return
        }

        if (Math.floor(e.timeStamp) % 3 !== 0) {
            return
        }
        
        let below = document.elementFromPoint(e.clientX, e.clientY).id
        if (below === lastPoint) {
            return
        }
        
        lastPoint = below
        handleMouseClick(e)

    }

    const handleMouseUp = (e) => {

        mouseDown = false
        if (currentStroke.length > 0) {
            props.history(currentStroke)
            currentStroke = []
        }

    }

    const addToHistory = (storeData) => {
        console.log(storeData)
        currentStroke.push(storeData)
    }


    const handleMouseClick = async (e) => {

        e.preventDefault();

        if (!e.target.classList.contains('pixel')) {
            return
        }

        mouseDown = true;
        let below = document.elementFromPoint(e.clientX, e.clientY)

        if (!below.classList.contains('pixel')) {      
            return
        }

        let storeData = [await JSON.parse(e.target.id), below.style.backgroundColor]
        addToHistory(storeData)
        
        below.style.backgroundColor = props.currentColor
        if (props.size === 2) {
            let location = JSON.parse(e.target.id)
            let right1 = document.getElementById(`[${location[0]}, ${location[1]+1}]`)
            let left1 = document.getElementById(`[${location[0]}, ${location[1]-1}]`)
            let top1 = document.getElementById(`[${location[0]+1}, ${location[1]}]`)
            let bottom1 = document.getElementById(`[${location[0]-1}, ${location[1]}]`)
            if (right1) { right1.style.backgroundColor = props.currentColor }
            if (left1) { left1.style.backgroundColor = props.currentColor }
            if (top1) { top1.style.backgroundColor = props.currentColor }
            if (bottom1) { bottom1.style.backgroundColor = props.currentColor }
        } else if (props.size === 3) {
            let location = JSON.parse(e.target.id)
            let rightm = document.getElementById(`[${location[0]}, ${location[1]+1}]`)
            let leftm = document.getElementById(`[${location[0]}, ${location[1]-1}]`)
            let topm = document.getElementById(`[${location[0]+1}, ${location[1]}]`)
            let bottomm = document.getElementById(`[${location[0]-1}, ${location[1]}]`)
            let rightt = document.getElementById(`[${location[0]+1}, ${location[1]+1}]`)
            let rightb = document.getElementById(`[${location[0]+1}, ${location[1]-1}]`)
            let leftt = document.getElementById(`[${location[0]-1}, ${location[1]+1}]`)
            let leftb = document.getElementById(`[${location[0]-1}, ${location[1]-1}]`)
            if (rightm) { rightm.style.backgroundColor = props.currentColor }
            if (leftm) { leftm.style.backgroundColor = props.currentColor }
            if (topm) { topm.style.backgroundColor = props.currentColor }
            if (bottomm) { bottomm.style.backgroundColor = props.currentColor }
            if (rightt) { rightt.style.backgroundColor = props.currentColor }
            if (rightb) { rightb.style.backgroundColor = props.currentColor }
            if (leftt) { leftt.style.backgroundColor = props.currentColor }
            if (leftb) { leftb.style.backgroundColor = props.currentColor }
        }
    }

    return null
}