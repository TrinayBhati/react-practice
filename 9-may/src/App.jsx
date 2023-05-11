
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
  const users = [{
    id:1, name:"Trinay", age:23
  },
  {
    id:2, name:"Shourya", age:8
  },
  {
    id:3, name:"Papu", age:100
  }
  ];

  function handleCardClick({name, age}){
    console.log(`${name}'s card clicked`)
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
      {
        users.map(user => {
          return(
            <div onClick={()=>{
              handleCardClick({name:user.name, age:user.age})
            }} className="card">
              <h2>Name : {user.name}</h2>
              <h3>Age : {user.age}</h3>
              <h5>id : {user.id}</h5>
            </div>
            )
        }
      )}

    </>
  )
}

export default App
