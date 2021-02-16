import React, { useState } from 'react'
import './Pixel.scss'

export default function Pixel(props) {
    const { currentColor, dimension } = props

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
        style={{ backgroundColor: pixelColor, width: `${300/dimension}px`, height: `${300/dimension}px` }}
      ></div>
    )
}