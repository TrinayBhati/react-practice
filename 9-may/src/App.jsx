
import './App.css'

function App() {
  
  function handleClick(){
    console.log("peach");
  }
  function handleAnchorClick(){
    console.log("teach");
  }
  function handleEventClick(e){
    console.log(`${e.target.innerText} has been clicked`);
  }
  function handleBashClick(para){
    console.log(para)
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <br/>
      <br/>
      <a onClick={handleAnchorClick}>Google</a>
      <br/>
      <br/>
      <button onClick={(event)=>{
        console.log(event)
      }}>Smash</button>
      <br/>
      <br/>
      <button onClick={handleEventClick}>Button 1</button>
      <button onClick={handleEventClick}>Button 2</button>
      <button onClick={handleEventClick}>Button 3</button>
      <br/>
      <br/>
      <button onClick={(event)=>{
        handleBashClick("that's why he's the goat");
      }}>Bash</button>
    </>
  )
}

export default App
