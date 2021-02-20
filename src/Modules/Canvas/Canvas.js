import React, { useRef } from 'react'
import Row from "./Row"

const Canvas = React.memo(props => {
    const { dimension, backgroundColor, zoom, grid } = props

    const canvasRef = useRef();

    let rows = []
    

    for (let i = 0; i < dimension; i++) {
        console.log('redrawing')
        rows.push(<Row grid={grid} rid={i} key={i} zoom={zoom} dimension={dimension} backgroundColor={backgroundColor}/>)
    }

    return (
        <div id="canvas" ref={canvasRef}>
            {rows}
        </div>
    )
})

export default Canvas
