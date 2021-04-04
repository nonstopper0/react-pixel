import { cleanup } from '@testing-library/react';
import React, { useEffect, useState }  from 'react'
import './Modal.scss';

export default function RoomModal(props) {
  const [textInput, setTextInput] = useState('')

  const handleClick = (e) => {
    if (!e.target.classList.contains("modal-component")) {
        props.close()
    }
  }

  const handleInput = (e) => {
    e.preventDefault()
    setTextInput((previous) => e.target.value)
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClick )

    return cleanup(() => {
      window.removeEventListener('mousedown', handleClick)
    }
  )}, [])

  return (
        <div className="Modal modal-component">
          <h1 className="modal-component">Join/Create MultiDraw Room</h1>
          <input 
            onChange={handleInput}
            placeholder="Room Name"
            value={textInput}
            className="modal-component"
          />
          <button className="modal-component" onClick={() => props.handleNetwork(textInput)}>Join</button>
        </div>
  );
}
