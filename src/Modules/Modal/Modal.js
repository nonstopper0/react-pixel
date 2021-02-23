import { cleanup } from '@testing-library/react';
import React, { useEffect, useState }  from 'react'
import './Modal.scss';

export default function Modal(props) {
  const [textInput, setTextInput] = useState('Room Name')

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
          <h1 className="modal-component">Join MultiDraw Room</h1>
          <input 
            onChange={(input) => setTextInput((previous) => input.target.value)}
            value={textInput}
            className="modal-component"
          />
          <button className="modal-component" onClick={() => props.click(textInput)}>JOIN</button>
        </div>
  );
}
