import React, { useEffect, useState, useRef } from 'react'


export default function Brush(props) {
    const { currentColor, size } = props

    const [locationArray, setLocationArray] = useState([])
    const [lastPoint, setLastPoint] = useState(false)
    let mouseDown = false;
    let currentStroke = [];

    useEffect(() => {

        console.log('attaching event listener to brush with color: ' + currentColor)
        window.addEventListener('mousedown', handleMouseClick );
        window.addEventListener('mousemove', handleMouseMove );
        window.addEventListener('mouseleave', handleMouseUp );
        window.addEventListener('mouseup', handleMouseUp );

        return function cleanup() {
            console.log('removing event listeners')
            window.removeEventListener('mousedown', handleMouseClick );
            window.removeEventListener('mousemove', handleMouseMove );
            window.removeEventListener('mouseleave', handleMouseUp );
            window.removeEventListener('mouseup', handleMouseUp );
        }
    }, [currentColor, size])

    const handleMouseMove = (e) => {
        
        if (!mouseDown) { 
            return 
        }
        
        if (Math.floor(e.timeStamp) % 2 === 0) {
            return 
        }

        setLastPoint((lastPoint) => {
        
            if (e.target.id === lastPoint) {
                return lastPoint
            }

            
            handleMouseClick(e)
            return e.target.id
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
        // first stroke ? 
        if (!currentStroke) {
            currentStroke.push(data)
            return
        }  

        // if current color of the block and the desired color to change it to are the same.
        // I dont check this within the mousedown function because I dont want to do that check for all different sizes of the brush. Seems pretty heavy.
        if (data[1] === data[2]) {
            return 
        }

        currentStroke.push(data)
    }


    const handleMouseClick = async (e) => {

        e.preventDefault();

        // make sure i am not changing something that isnt a pixel.
        if (!e.target.classList.contains('pixel')) {
            return
        }

        // set mousedown to active things like mousedown trigger event firing.
        mouseDown = true;   
        
        
        // handle the middle stroke of the brush. Since no matter what brush size this will be called
        let storeData = [await JSON.parse(e.target.id), e.target.style.backgroundColor, currentColor]
        e.target.style.backgroundColor = currentColor

        handleHistoryStore(storeData)

        let location = storeData[0]

        if (size === 2) {
            let right1 = document.getElementById(`[${location[0]}, ${location[1]+1}]`)
            let left1 = document.getElementById(`[${location[0]}, ${location[1]-1}]`)
            let top1 = document.getElementById(`[${location[0]+1}, ${location[1]}]`)
            let bottom1 = document.getElementById(`[${location[0]-1}, ${location[1]}]`)
            if (right1) { 
                handleHistoryStore([[location[0], location[1]+1], right1.style.backgroundColor, currentColor])
                right1.style.backgroundColor = currentColor
             }
            if (left1) { 
                handleHistoryStore([[location[0], location[1]-1], left1.style.backgroundColor, currentColor])
                left1.style.backgroundColor = currentColor
             }
            if (top1) { 
                handleHistoryStore([[location[0]+1, location[1]], top1.style.backgroundColor, currentColor])
                top1.style.backgroundColor = currentColor
             }
            if (bottom1) { 
                handleHistoryStore([[location[0]-1, location[1]], bottom1.style.backgroundColor, currentColor])
                bottom1.style.backgroundColor = currentColor
             }
        } else if (size === 3) {
            let rightm = document.getElementById(`[${location[0]}, ${location[1]+1}]`)
            let leftm = document.getElementById(`[${location[0]}, ${location[1]-1}]`)
            let topm = document.getElementById(`[${location[0]+1}, ${location[1]}]`)
            let bottomm = document.getElementById(`[${location[0]-1}, ${location[1]}]`)
            let rightt = document.getElementById(`[${location[0]+1}, ${location[1]+1}]`)
            let rightb = document.getElementById(`[${location[0]+1}, ${location[1]-1}]`)
            let leftt = document.getElementById(`[${location[0]-1}, ${location[1]+1}]`)
            let leftb = document.getElementById(`[${location[0]-1}, ${location[1]-1}]`)
            if (rightm) { 
                handleHistoryStore([[location[0], location[1]+1], rightm.style.backgroundColor, currentColor])
                rightm.style.backgroundColor = currentColor
            }
            if (leftm) { 
                handleHistoryStore([[location[0], location[1]-1], leftm.style.backgroundColor, currentColor])
                leftm.style.backgroundColor = currentColor
            }
            if (topm) { 
                handleHistoryStore([[location[0]+1, location[1]], topm.style.backgroundColor, currentColor])
                topm.style.backgroundColor = currentColor 
            }
            if (bottomm) { 
                handleHistoryStore([[location[0]-1, location[1]], bottomm.style.backgroundColor, currentColor])
                bottomm.style.backgroundColor = currentColor
            }
            if (rightt) { 
                handleHistoryStore([[location[0]+1, location[1]+1], rightt.style.backgroundColor, currentColor])
                rightt.style.backgroundColor = currentColor 
            }
            if (rightb) { 
                handleHistoryStore([[location[0]+1, location[1]-1], rightb.style.backgroundColor, currentColor])
                rightb.style.backgroundColor = currentColor 
            }
            if (leftt) { 
                handleHistoryStore([[location[0]-1, location[1]+1], leftt.style.backgroundColor, currentColor])
                leftt.style.backgroundColor = currentColor 
            }
            if (leftb) { 
                handleHistoryStore([[location[0]-1, location[1]-1], leftb.style.backgroundColor, currentColor])
                leftb.style.backgroundColor = currentColor 
            }
        }
    }

    return null
}