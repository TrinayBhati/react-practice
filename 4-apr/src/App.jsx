import './App.css'



function App() {

  const projects = [
    {name:"dippies", rating:"not blue chip"},
     {name:"boki", rating:"blue chip"}, 
     {name:"pssssd", rating:"not blue chip"},
      {name:"wonderpals", rating:"blue chip"}
      ];

   const filtered = projects.filter((project)=>project.rating == "blue chip")
   const result = filtered.map((project)=>{
   return( <div >
         <h4>{project.name}</h4>
         <p>{project.rating}</p>
       </div>)
  }); 

   const scores = [10, 20, 30, 40, 50 ];

  // Array -> map -> Array of jsx elements
  // Array -> filter -> new Array
  // when react jsx array it'll render them one by one

  return (
    <div>
    {result}
    {scores.filter((score)=>score>20).map((score)=><p>{score}</p>)}
    </div>
  )
}

export default App
