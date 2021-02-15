import React, { useState, useContext } from 'react';
import './Modal.scss';

export default function Modal(props) {
  return (
    <div className="Modal">
      {props.choices.map((choice, index) => {
        return (
          <div key={choice}>
            <h3>
              {choice}
            </h3>
            <button onClick={()=>props.return[index](
              props.step[0] == "*" ? props.input[index]*props.step[1] : 3 || props.step == "addition"
            )}>-</button>
            <button onClick={()=>props.return[index](choice)}>+</button>
          </div>
        )
      })}
    </div>
  );
}
