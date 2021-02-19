import React, { useState, useEffect } from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
import './Pixel.scss'

export default function Pixel(props) {
    const { currentColor, dimension, zoom, pid, rid } = props
    const [pixelColor, setPixelColor] = useState("#fff")
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true);
    const [border, setBorder] = useState(false)

    const changeColorOnHover = (e) => {
      e.target.style.border = "1px solid black"
    }

    const changeColorOnLeave = (e) => {
      e.target.style.border = "none"
    }

    return (
        <div
        className="pixel"
        id={`[${rid}, ${pid}]`}
        onMouseOver={changeColorOnHover}
        onMouseLeave={changeColorOnLeave}
        // onMouseEnter={changeColorOnHover}
        // onMouseLeave={resetColor}
        // onClick={applyColor}
        style={{boxShadow: border ? 'inset 0px 0px 0px 2px white' : '', backgroundColor: pixelColor, width: `${zoom/dimension}px`, height: `${zoom/dimension}px` }}
      ></div>
    )
}