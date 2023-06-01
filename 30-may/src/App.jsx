import { useState , useEffect } from 'react'
import './App.css'
import Loader from './Loader'

/*function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=>{
    (async () =>{
      setLoading(true);
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users
          `)
        
        if(!response.ok){
          throw new Error(`API failed status : ${response.status}`)
        }
        
       const data = await response.json();
       setUsers(data);
      }
      catch(e){
        setError(e.message);
      }
      finally{
        setLoading(false)
      }

      // const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      // const data = await response.json();
      // setLoading(false)
      //  setUsers(data);

    })();
  },[])

  if(loading){
    return <Loader/>
  }
  if(error){
    return(
    <div>
      <img src="https://thumbs.dreamstime.com/b/error-website-banner-concept-thin-line-flat-design-vector-illustration-eps-84447564.jpg" alt="error image"/> 
      <h2>{error}</h2>
    </div> 
    )
  }
    if(users.length === 0 ){
    return(
      <h1>No data to show </h1>
    )
  } 

  // if(users.length === 0 ){
  //   return <Loader/>
  // } //not preffered method, never depend on data to show loader

  return (
    <>
        {users.map(user => <h1>{user.name}</h1>) }
    </>
  )
}
*/
function App(){

  const [count, setCount] = useState(0);

  function handleClick(){
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    setCount((mostUpToDatedCount)=>{
      return mostUpToDatedCount+1; // 1
    })
    setCount((mostUpToDatedCount)=>{
      return mostUpToDatedCount+1; // 2
    })
    setCount((mostUpToDatedCount)=>{
      return mostUpToDatedCount+1; // 3
    })
  }
  return(
    <div>
      <button onClick={handleClick}>Count : {count}</button>
    </div>
    )
}

export default App
