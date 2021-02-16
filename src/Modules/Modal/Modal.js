import React, { useState, useContext } from 'react';
import './Modal.scss';

export default function Modal(props) {
  return (
      // A model for configuring mathmatical input to the users liking. 
      // Props Layout:
      // ---------------------------------------------------------------------
      // step={['*', 2]}
      // ---------------------
      // [0]: the type of input modification you want for the plus and minus buttons:
      // -------
      // Multiplaction / division ("*") 
      // Addition / Subtration ("+")
      // -------
      // [1]: the amount of multiplication / division / subtration etc... you want for every click of the button. 
      // for example putting 2 at [1] in this box when [0] is * (multiplication) will multiply the number by 2 everytime the plus sign is pushed. And divide it by 2 whenever the minus sign is pushed.
      // I probably way overcomplicated this component by trying to make it reusable....
      // ---------------------------------------------------------------------
      // input={[...all variables you want to change]}
      // variable input to properly calculate changes
    <div className="Modal">
      {props.choices.map((choice, index) => {
        return (
          <div key={choice}>
            <h3>
              {choice}
            </h3>
            <button onClick={()=>props.return[index](
              props.step[0] == "*" ? props.input[index]*props.step[1] : props.input[index]+props.step[1]
            )}>+</button>
            <button onClick={()=>props.return[index](
              props.step[0] == "*" ? props.input[index]/props.step[1] : props.input[index]-props.step[1]
            )}>-</button>
          </div>
        )
      })}
    </div>
  );
}
