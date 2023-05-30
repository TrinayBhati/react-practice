import { useState, useEffect } from 'react'
import './App.css'
import Loader from './Loader'

function App() {

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);  
  const [userData, setUserData] = useState(null);
  const [users, setUser] = useState([]);
  useEffect(()=>{
  
    // function getUserData(){
    //   fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random()*100)}`).then((response)=>{
    //     return response.json();
    //   }).then((data)=>{
    //     console.log(data);
    //     setUserData(data);
    //   }) 
    // };
    
    // (async function getUserData(){
    //       const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random()*100)}`);
    //       const data = await response.json();
    //       setUserData(data);
    //     })()

        (async function getUserData(){
          setLoading(true)
          const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
          const data = await response.json();
          setLoading(false)
          setUser(data);
        })()

    // getUserData();
  },[])

  // function getUserData(){
  //     fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
  //       return response.json();
  //     }).then((data)=>{
  //       console.log(data);
  //     })
  //   };
  //   getUserData();
  
  // if(!userData){
  //   return <h1>Loading...</h1>
  // }  

  if(loading){
    return <Loader/>
  }

  return (
    <>
        {/*<h1>TITLE : {userData.title}</h1> // won't work without if condition above*/}
        {/*<h1>TITLE : {userData && userData.title}</h1>*/}
        {/*<h1>TITLE : {userData?.title || "Loading..."}</h1>*/}
        {users.map((user)=>(<h1>{user.name}</h1>))}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
