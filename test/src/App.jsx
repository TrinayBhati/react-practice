import { useState } from "react";
import "./App.css";

/**function MyButton({ click, count }) {
  return <button onClick={click}>Count : {count}</button>;
}**/
/**const user = {
  name: "Hedy Lamar",
  imgUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};**/
/**function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <>
      <div>
        <h2>Incremenmt</h2>
        <MyButton click={handleClick} count={count} />
      </div>
      <img
        className="avatar"
        src={user.imgUrl}
        alt={"photo of" + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}**/

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = () => {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  };
  return (
    <>
      <div classname="board-row">
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
        <Square value={squares[3]} onSquareClick={handleClick} />
      </div>
      <div classname="board-row">
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
        <Square value={squares[6]} onSquareClick={handleClick} />
      </div>
      <div classname="board-row">
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
        <Square value={squares[9]} onSquareClick={handleClick} />
      </div>
    </>
  );
}

export default App;
