import React, { useEffect, useState, useRef } from 'react'


export default function Brush(props) {

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
        
        if (!mouseDown) { 
            return 
        }
        
        if (Math.floor(e.timeStamp) % 3 !== 0) {
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
        // first run
        if (!currentStroke) {
            currentStroke.push(data)
            return
        }  

        new Promise((resolve, reject) => {
            setLocationArray((locations) => {
                let stringedData = data[0].toString()
                if (locations.includes(stringedData)) {
                    return locations
                }
                resolve()
                return [...locations, stringedData]
            })
            reject()
        })
            .then(()=> currentStroke.push(data))
            .catch((err) => err)
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
        let storeData = [await JSON.parse(e.target.id), e.target.style.backgroundColor]
        e.target.style.backgroundColor = props.currentColor

        handleHistoryStore(storeData)

        let location = storeData[0]

        if (props.size === 2) {
            let right1 = document.getElementById(`[${location[0]}, ${location[1]+1}]`)
            let left1 = document.getElementById(`[${location[0]}, ${location[1]-1}]`)
            let top1 = document.getElementById(`[${location[0]+1}, ${location[1]}]`)
            let bottom1 = document.getElementById(`[${location[0]-1}, ${location[1]}]`)
            if (right1) { 
                handleHistoryStore([[location[0], location[1]+1], right1.style.backgroundColor])
                right1.style.backgroundColor = props.currentColor
             }
            if (left1) { 
                handleHistoryStore([[location[0], location[1]-1], left1.style.backgroundColor])
                left1.style.backgroundColor = props.currentColor
             }
            if (top1) { 
                handleHistoryStore([[location[0]+1, location[1]], top1.style.backgroundColor])
                top1.style.backgroundColor = props.currentColor
             }
            if (bottom1) { 
                handleHistoryStore([[location[0]-1, location[1]], bottom1.style.backgroundColor])
                bottom1.style.backgroundColor = props.currentColor
             }
        } else if (props.size === 3) {
            let rightm = document.getElementById(`[${location[0]}, ${location[1]+1}]`)
            let leftm = document.getElementById(`[${location[0]}, ${location[1]-1}]`)
            let topm = document.getElementById(`[${location[0]+1}, ${location[1]}]`)
            let bottomm = document.getElementById(`[${location[0]-1}, ${location[1]}]`)
            let rightt = document.getElementById(`[${location[0]+1}, ${location[1]+1}]`)
            let rightb = document.getElementById(`[${location[0]+1}, ${location[1]-1}]`)
            let leftt = document.getElementById(`[${location[0]-1}, ${location[1]+1}]`)
            let leftb = document.getElementById(`[${location[0]-1}, ${location[1]-1}]`)
            if (rightm) { 
                handleHistoryStore([[location[0], location[1]+1], rightm.style.backgroundColor])
                rightm.style.backgroundColor = props.currentColor
            }
            if (leftm) { 
                handleHistoryStore([[location[0], location[1]-1], leftm.style.backgroundColor])
                leftm.style.backgroundColor = props.currentColor
            }
            if (topm) { 
                handleHistoryStore([[location[0]+1, location[1]], topm.style.backgroundColor])
                topm.style.backgroundColor = props.currentColor 
            }
            if (bottomm) { 
                handleHistoryStore([[location[0]-1, location[1]], bottomm.style.backgroundColor])
                bottomm.style.backgroundColor = props.currentColor
            }
            if (rightt) { 
                handleHistoryStore([[location[0]+1, location[1]+1], rightt.style.backgroundColor])
                rightt.style.backgroundColor = props.currentColor 
            }
            if (rightb) { 
                handleHistoryStore([[location[0]+1, location[1]-1], rightb.style.backgroundColor])
                rightb.style.backgroundColor = props.currentColor 
            }
            if (leftt) { 
                handleHistoryStore([[location[0]-1, location[1]+1], leftt.style.backgroundColor])
                leftt.style.backgroundColor = props.currentColor 
            }
            if (leftb) { 
                handleHistoryStore([[location[0]-1, location[1]-1], leftb.style.backgroundColor])
                leftb.style.backgroundColor = props.currentColor 
            }
        }
    }

    return null
}