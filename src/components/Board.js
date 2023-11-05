import React from 'react';
import "./Board.css"
import Box from './Box';

const Board = ({board , onclick}) => {
  return (
    <div className='board'>
        {board.map((val,idx)=>{
            return <Box value={val} afterClick={() => val  === null &&  onclick(idx)} />
        })}
    </div>
  )
}

export default Board;