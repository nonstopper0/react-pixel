import React, { useState, useEffect, useRef } from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
import './Pixel.scss'

export default function Pixel(props) {
    const { currentColor, dimension, zoom, pid, rid, brush } = props
    const self = useRef();
    const [pixelColor, setPixelColor] = useState("#fff")
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true);
    const [border, setBorder] = useState(false)

    function applyColor() {
        setPixelColor(currentColor)
        setCanChangeColor(false)
        setBorder(false)
    }

    async function changeColorOnHover(e) {
        setOldColor(pixelColor);
        setPixelColor(currentColor);
        setBorder(true)
        let element = e.target.attributes[0]
        console.log(e.target.getAttribute('value').split(","))
      }
    
      function resetColor() {
        if (canChangeColor) {
          setPixelColor(oldColor);
          setBorder(false)
        }
        setCanChangeColor(true);
      }

    return (
        <div
        ref={self}
        value={[rid, pid]}
        className="pixel"
        onMouseEnter={changeColorOnHover}
        onMouseLeave={resetColor}
        onMouseDown={applyColor}
        style={{boxShadow: border ? 'inset 0px 0px 0px 2px white' : '', backgroundColor: pixelColor, width: `${zoom/dimension}px`, height: `${zoom/dimension}px` }}
      ></div>
    )
}