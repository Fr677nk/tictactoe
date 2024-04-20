import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [tiles, setTiles] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState(false);
  const [status, setStatus] = useState("Current player: X");

  const clickSquare = (num) => {
    if (tiles[num] == "") {
      tiles[num] = turn ? "O" : "X";
      // setTiles(tiles.slice(0, num).concat(tiles.slice(num, tiles.length)));
      setTiles(
        tiles
          .slice(0, num)
          .concat(tiles[num])
          .concat(tiles.slice(num + 1, tiles.length))
      );
      console.log(tiles);
      turn ? setStatus("Current player: X") : setStatus("Current player: O");
      checkWinner(tiles[num]);
      setTurn(!turn);
    }
  };
  const resetBtn = () => {
    setTiles(["", "", "", "", "", "", "", "", ""]);
    let list = document.getElementsByClassName("slot");
    for (let index = 0; index < list.length; ++index) {
      list[index].removeAttribute("disabled");
    }
    turn ? setStatus("Current player: O") : setStatus("Current player: X");
  };

  const checkWinner = (who) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    if (
      tiles[0] != "" &&
      tiles[1] != "" &&
      tiles[2] != "" &&
      tiles[3] != "" &&
      tiles[4] != "" &&
      tiles[5] != "" &&
      tiles[6] != "" &&
      tiles[7] != "" &&
      tiles[8] != ""
    ) {
      setStatus("Draw.");
      let list = document.getElementsByClassName("slot");
      for (let index = 0; index < list.length; ++index) {
        list[index].setAttribute("disabled", true);
      }
    }
    lines.forEach((item) => {
      // console.log( tiles[item[0]] , tiles[item[1]] , tiles[item[2]]);
      if (
        tiles[item[0]] === who &&
        tiles[item[0]] === tiles[item[1]] &&
        tiles[item[1]] === tiles[item[2]]
      ) {
        setStatus(who + " IS A WINNER");
        let list = document.getElementsByClassName("slot");
        for (let index = 0; index < list.length; ++index) {
          list[index].setAttribute("disabled", true);
        }
      }
    });
  };
  return (
    <>
      <div id="gameSquare">
        <ul>
          <button className="slot" onClick={() => clickSquare(0)}>
            {tiles[0]}
          </button>
          <button className="slot" onClick={() => clickSquare(1)}>
            {tiles[1]}
          </button>
          <button className="slot" onClick={() => clickSquare(2)}>
            {tiles[2]}
          </button>
          <button className="slot" onClick={() => clickSquare(3)}>
            {tiles[3]}
          </button>
          <button className="slot" onClick={() => clickSquare(4)}>
            {tiles[4]}
          </button>
          <button className="slot" onClick={() => clickSquare(5)}>
            {tiles[5]}
          </button>
          <button className="slot" onClick={() => clickSquare(6)}>
            {tiles[6]}
          </button>
          <button className="slot" onClick={() => clickSquare(7)}>
            {tiles[7]}
          </button>
          <button className="slot" onClick={() => clickSquare(8)}>
            {tiles[8]}
          </button>
        </ul>
      </div>
      <p id="status">{status}</p>
      <button onClick={resetBtn}>Reset Board</button>
    </>
  );
}

export default App;
