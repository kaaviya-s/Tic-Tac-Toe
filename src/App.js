import './App.css';
import Board from "./components/Board"; 
import React, {useState} from "react";
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';

function App() {

  const WIN_CONDITIONS= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const [gameOver,setGameOver] = useState(false);
  const [board,setBoard] = useState(Array(9).fill(null));
  const [xPlaying,setXPlaying]=useState(true);
  const [score,setScores]=useState({xScore: 0, oScore:0});

  const handleBoxClick=(boxIndex)=>{
    const updateBoard= board.map((value,index)=>{
      if(index === boxIndex){
        return xPlaying === true ? "X" : "O";
      }else{
        return value;
      } 
    })
    
    const winner=checkWinner(updateBoard);
    if(winner){
      if(winner === "X"){
        let{xScore}=score;
        xScore += 1;
        setScores({...score,xScore});
        
      }else{
        let {oScore}=score;
        oScore += 1;
        setScores({...score,oScore});
      }
    }
    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  }

  const checkWinner=(board)=>{
    for(let i=0;i<WIN_CONDITIONS.length ; i++){
      const [x,y,z]=WIN_CONDITIONS[i];

      if(board[x] && board[x] === board[y] && board[y]===board[z]){
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetGame=()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <ScoreBoard score={score} xPlaying={xPlaying} />
      <Board board={board} onclick={ gameOver ? resetGame :  handleBoxClick}/>
      <ResetButton resetGame={resetGame} />
    </div>
  );
}

export default App;
