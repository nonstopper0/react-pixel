import React, { useEffect, useState, useRef } from 'react'


export default function Brush(props) {

    const [lastStroke, setLastStroke] = useState(false);
    const [locationArray, setLocationArray] = useState([])
    const [lastPoint, setLastPoint] = useState(false)
    let mouseDown = false;
    let currentStroke = [];

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

    const handleMouseMove = (e) => {

        setLastPoint((lastPoint) => {
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
        })
    }
 
    const handleMouseUp = (e) => {

        mouseDown = false
        if (currentStroke.length > 0) {
            props.history(currentStroke)
            currentStroke = []
            setLocationArray((previous) => [])
        }

    }

    const handleHistoryStore = (data) => {
        // first run
        if (!currentStroke) {
            currentStroke.push(data)
            return
        }  

        let duplicate = false;

        new Promise((resolve, reject) => {
            setLocationArray((locations) => {
                let stringedData = data[0].toString()
                console.log(stringedData, locations)
                if (locations.includes(stringedData)) {
                    duplicate = true
                    reject()
                    return locations
                }
                resolve()
                return [...locations, stringedData]
            })
        })
            .then(()=> currentStroke.push(data))
            .catch(() => console.log('duplicate'))
    }


    const handleMouseClick = async (e) => {

        e.preventDefault();

        if (!e.target.classList.contains('pixel')) {
            return
        }

        mouseDown = true;
        let below = document.elementFromPoint(e.clientX, e.clientY)
        let storeData = [await JSON.parse(e.target.id), below.style.backgroundColor]
        handleHistoryStore(storeData)

        if (!below.classList.contains('pixel')) {      
            return
        }

        
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