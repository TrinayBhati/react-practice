import './App.css'


const Button = (props) => {

  // can use ({children, buttonTitle }) here destructuring will use children only then instead of props.children then

  // return <button>{props.title}</button>
     return <button title={props.buttonTitle}>{props.children}</button> 
};

const Layout = (props)=>{ 
  return (
    <main>
      {props.children}
      <Button buttonTitle = {props.buttonTitle}>Smash</Button>
    </main>
    );
};

  // every props object have a special property named children, props is an object
  // first children is undefined unless we define the component same way we use html tag <Button>children</Button>
  // whatever we add in opening n closing tag of component is children property
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

   const phones = [
    {id:1, name:"iPhone", rating:5},
    {id:1, name:"Samsung", rating:4.5},
    {id:1, name:"Pixel", rating:4},
    {id:1, name:"Vivo", rating:3},
    ];

   const mapping = {
    iPhone : <h2>IOS </h2>,
    Pixel : <h2>Google </h2>,
    Samsung : <h2>samsoong</h2>,
    Vivo : <h5>Vivo</h5>
   }

  // Array -> map -> Array of jsx elements
  // Array -> filter -> new Array
  // when react jsx array it'll render them one by one

  return (
    <div>

    {/*{result}
    {scores.filter((score)=>score>20).map((score)=> <p>{score}</p>)}
    {scores.map((score)=>
      <div>
        <h2>{score}</h2>
        <h3>{score>20 ? "Pass" : "Fail"}</h3>
      </div>
      )}*/}

    {/*{phones.map((phone)=>
      <div>
        <h4>{phone.name}</h4>
        <h3>{phone.rating}</h3>
      </div>
      )}*/}

    {/*{phones.map((phone)=>
      // {
      //   if(phone.name == "iPhone"){
      //     return <h2>IOS </h2>
      //   }
      //   if(phone.name == "Samsung"){
      //      return <h2>samsoong</h2>
      //   }
      //   if(phone.name == "Pixel") {
      //     return <h1>Google</h1>
      //   }
      // }

    // {
    //   switch (phone.name){
    //   case "iPhone":
    //      return (<h2>IOS </h2>)
    //   case "Samsung":
    //      return (<h2>samsoong</h2>)    
    //   case "Vivo":
    //      return (<h4>vivo</h4>)   
    //   }
    // }

      {
        return mapping[phone.name];
      }

      )}*/}
        
    {/*<Button title="Click Me"/>  */}
    {/*<Button>Click Me</Button>*/}

    <Layout buttonTitle="btn">
      <h1>Heading</h1>
      <p>paragraph here</p>
    </Layout>
    </div>
  )
}

export default App
