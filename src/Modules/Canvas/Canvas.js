import React, { useRef } from 'react'
import Row from "./Row"

const Canvas = React.memo(props => {
    const { dimension, currentColor, zoom } = props

    const canvasRef = useRef();

    let rows = []

    for (let i = 0; i < dimension; i++) {
        console.log('redrawing')
        rows.push(<Row rid={i} key={i} zoom={zoom} dimension={dimension} currentColor={currentColor}/>)
    }

    return (
        <div ref={canvasRef}>
            {rows}
        </div>
    )
})

export default Canvas
