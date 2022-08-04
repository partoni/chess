
import React,{ useEffect, useState } from 'react';
import './App.css';
import { BoardComponent } from './components/BoardComponent';
import Board from './models/Board';

function App() {
  const [board,setBoard] = useState(new Board())
  useEffect(()=>{
    restart()

  },[])
  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigurs()
    
    setBoard(newBoard)
  }

  return (
    <div className="App">
      <header className="App-header">
       chessboard
        <div className='board'>
        <BoardComponent 
        board = {board}
        setBoard={setBoard}/>
        </div>
      </header>
    </div>
  );
}

export default App;
