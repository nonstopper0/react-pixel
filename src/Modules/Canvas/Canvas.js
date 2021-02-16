import React, { useRef } from 'react'
import Row from "./Row"

export default function Canvas(props) {
    const { dimension, currentColor } = props

    const canvasRef = useRef();

    let rows = []

    for (let i = 0; i < dimension; i++) {
        console.log('redrawing')
        rows.push(<Row key={i} dimension={dimension} currentColor={currentColor}/>)
    }

    return (
        <div ref={canvasRef}>
            {rows}
        </div>
    )
}
