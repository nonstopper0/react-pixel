import { cleanup } from '@testing-library/react';
import React, { useEffect, useState }  from 'react'
import './Modal.scss';

export default function ResizeModal(props) {
  const [size, setSize] = useState(props.dimension)

  const handleClick = (e) => {
    if (!e.target.classList.contains("modal-component")) {
        props.close()
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClick )

    return cleanup(() => {
      window.removeEventListener('mousedown', handleClick)
    }
  )}, [])

  return (
        <div className="Modal modal-component">
          <h1 className="h12 modal-component">Resize</h1>
          <p>current size: {props.dimension} x {props.dimension}</p>
          <h2>{size} x {size}</h2>
          <div className="modal-component modal-buttons">
            <button onClick={()=> { setSize((prev) => prev > 16 ? prev / 2 : prev)}} className="modal-component">-</button>
            <button onClick={()=> { setSize((prev) => prev < 64 ? prev * 2 : prev)}} className="modal-component">+</button>
          </div>
          <button onClick={() => props.handleResize(size)} className="modal-component b2">Resize</button>
        </div>
  );
}
