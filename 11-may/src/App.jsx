import './App.css';
import { useState } from "react";

// const Button = ({children, click})=>{
//   return <button onClick={click}>{children}</button>
// }

// props are immutable, sent from parent to child in above case click and childre are not owned by Button but by App Button is simply using them
// state is smthn that can change overtime
// state is just when smthn changes overtime within a component, when component needs to remember smthn that is state
// before 2019 if we wanted to have states, only choice was to use class, but later on we can now use function components using react hooks.
// react hook sare simply functions which enable us to hook into core react features using function component.
// first react hook in this file -> useState (all hooks must start with use n camel case)
/*
  function useState(initialValue){
    function disaptch(){}
    return[value, dispatch];
  }
  //const array = useState("");
  array[0] // value
  array[1] // dispatch fxn
    //destructuring the array
    const[count, setCount] = useState(0);
      //first value is the simple value next is always a function
      //useState accepts one argument that is initialValue
      //returns always an array
      //useState returns an array which we can destructure
*/

function App() {

  // can't use normal variables bc it won't help in rerender
  // in order to rerender we gotta use state variable
  // let count = 10;
  const [count, setCount] = useState(96); 

          // that 96 is initialState on first render will be the first value of count
          // first value we get is count
          //second is the fxn which will udate state value overtime 

  const [status, setStatus] = useState("OFF");

  const [isStatusOn, setStatusOn] = useState(false);

  const increment = ()=>{
    // count = count+1;
    // count += 1;

    // here we'll update count using setCount
    // setCount(69);
    setCount(count+1);
  }
  const handleChange = () =>{
    setStatus("ON");
  }
  const handleStatusChange = () =>{
    setStatusOn(!isStatusOn); // ! -> not reverse the value
  }
  return (
    <>
      <h1>Count: {count}</h1>
      {/*<Button onClick={increment}
      click={()=>{ console.log("Button clicked");}}
      >
        Increment
      </Button>*/}
      <button onClick={increment}>
        Increment
      </button>
      <br/>
      <br/>
      <button onClick={handleChange}>
        {status}
      </button>
      <br/>
      <br/>
      <button onClick={handleStatusChange}>
        {isStatusOn ? "true" : "false"}
      </button>
    </>
  )
}

export default App
