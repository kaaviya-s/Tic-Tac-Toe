import React from 'react';
import "./ResetButton.css";

const ResetButton = ({resetGame}) => {
  return (
    <div>
        <button className='reset-btn' onClick={resetGame}>Reset</button>
    </div>
  )
}

export default ResetButton