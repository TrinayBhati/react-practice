import { useState , useEffect} from 'react'
import './App.css'

const ToDo = ({id}) =>{
    
    const [toDo , setToDo] = useState({});  
    
    useEffect(()=>{
    (async function getToDo(){
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        setToDo(data); 
      })()
}, [id])  
    return <h1>{toDo.title}</h1>
}
  function App() {
  
    const [value, setValue] =useState(true);
    const [id , setId] = useState(1);

    const handleClick = () =>{
      // setValue(!value)
    setValue((prevState) => !prevState);
  }

  // async function getToDo(){
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random()*40)}`);
  //   const data = await response.json();
  //   setToDo(data); 
  // }


  const getNextToDo = () =>{
    setId((prevId)=> prevId + 1)
  };

  return (
    <>
      <h1>{value ? "on" : "off"}</h1>
      <button onClick={handleClick}>Toggle</button>
      {/*<h1>{toDo.title && toDo.title}</h1>*/}
      {/*<button onClick={getToDo}>Fetch Data</button>*/}
      <ToDo id={id} />
      <button onClick={getNextToDo}>Fetch Data</button>
    </>
  )
}

export default App
