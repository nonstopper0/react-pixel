import React, { useState, useEffect } from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
import './Pixel.scss'

export default function Pixel(props) {
    const { grid, backgroundColor, dimension, zoom, pid, rid } = props

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
        style={{boxShadow: grid ? 'inset 0 0 1px black' : 'none', backgroundColor: backgroundColor, width: `${zoom/dimension}px`, height: `${zoom/dimension}px` }}
      ></div>
    )
}