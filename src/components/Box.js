import React from 'react';
import "./Box.css";

const Box = ({value,afterClick}) => {
    const style = value === "X" ? "box X" :  "box O";
  return (
    <div>
        <button className={style} onClick={afterClick}>{value}</button>
    </div>
  )
}

export default Box;