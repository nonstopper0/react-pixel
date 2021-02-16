import React, { useState } from 'react'
import './Pixel.scss'

export default function Pixel(props) {
    const { currentColor, dimension, zoom } = props

    const [pixelColor, setPixelColor] = useState("#fff")
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true);
    
    function applyColor() {
        setPixelColor(currentColor)
        setCanChangeColor(false)
    }

    function changeColorOnHover() {
        setOldColor(pixelColor);
        setPixelColor(currentColor);
      }
    
      function resetColor() {
        if (canChangeColor) {
          setPixelColor(oldColor);
        }
        setCanChangeColor(true);
      }

    return (
        <div
        className="pixel"
        onClick={applyColor}
        onMouseEnter={changeColorOnHover}
        onMouseLeave={resetColor}
        style={{ backgroundColor: pixelColor, width: `${zoom/dimension}px`, height: `${zoom/dimension}px` }}
      ></div>
    )
}