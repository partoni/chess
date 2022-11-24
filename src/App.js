
import React, { useEffect, useState } from 'react';
import './App.css';
import { BoardComponent } from './components/board/BoardComponent';
import { CustomTimer } from './components/timer/customizeTimer';
// import { Timer } from './components/timer/timerDefault';
import Board from './models/Board';

function App() {
  console.log("App")
  const [board, setBoard] = useState(new Board())
  useEffect(() => {
   console.log("useEffect---App")
    restart()

  }, [])
  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigurs()
    setBoard(newBoard)
  }
  // function addFigurs(params) {
  //   board.addFigurs()
  //   setBoard()
  // }

  return (
    <div className="App">
      <header >
        <logo>chessOK</logo>
        {/* <Timer/> */}
      </header>
      <main>
        <nav>
          <ul>
            <li>ИГРА</li>
            <li>ИСТОРИЯ</li>
            <li>ИНСТРУМЕНТЫ</li>
          </ul>
        </nav>
        <section className='chessBoard'>
          <BoardComponent
            board={board}
            setBoard={setBoard} 
            restart={restart}/>
        </section>
        <section className='details'>
          <h3>ДЕТАЛИ</h3>
          <div className='eatenFiguresOfBlack'></div>
          <div className='timer'>
            <h4>таймер</h4>
            <CustomTimer/>
          </div>
          <div className='eatenFiguresOfWhite'></div>
        </section>

      </main>

      <footer></footer>
    </div>

  );
}

export default App;
