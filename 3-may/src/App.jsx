import "./App.css";

// const Avatar = ({src, width, height}) =>{
const Avatar = ({size,src }) =>{  

  // let height, width;
  // if(size === "s"){
  //   width=100;
  //   height=100;
  // }
  // else if (size === "m"){
  //   width=200;
  //   height=200;
  // }
  // else if(size === "l"){
  //   width=300;
  //   height=300;
  // }

  const sizes = { 
      s : {width:100, height:100,}, 
      m : {width:200, height:200,},
      l : {width:300, height:300,},
    }
    const {width, height} = sizes[size] || sizes.m;

  return (
    <div >
      <img src={src} className="avatar" 
      width={width}
      height={height}/>
    </div>
    )
};

// when giving array to render in jsx react it renders it one by one
  
const App = ()=>{
  const items = ["Nokia", "Samsung", "Apple", "Google"]
  
  // const result = [
  //   <li>Nokia</li>,
  //   <li>Samsung</li>,
  //   <li>Apple</li>,
  //   <li>Google</li>,
  //   ];

  // const result = [];
  // for(let item of items){
  //    result.push(<li>{item}</li>);
  // }

  // const result = [];
  // items.forEach(item)=>{
  //   result.push(<li>{item}</li>)
  // }

  // const result = items.map(item =>{
  //   return (<li>{item}</li>)
  // })

  // const projects = ["dippies", "boki", "pssssd", "wonderpals"]
  
    // const psult = projects.map((project)=>{
    //   return (<p>{project}</p>)
    // })

  const projects = [{name:"dippies", rating:"not blue chip"}, {name:"boki", rating:"blue chip"}, {name:"pssssd", rating:"not blue chip"}, {name:"wonderpals", rating:"blue chip"}]

  const psult = projects.map((project)=>{
   return( <div >
         <h4>{project.name}</h4>
         <p>{project.rating}</p>
       </div>)
  }); 


  return (
    <div className="card">
      <h2>Hello</h2>

      {/*<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3548H96dTNpUBbwPng9eb9Pi_OYoJEHFJ1A&usqp=CAU" height={200} width={200}/>
      <Avatar src="https://nftevening.com/wp-content/uploads/2021/09/bored-ape-yacht-club-bayc-roadmap-2.0-version.png" height={100} width={100}/>*/}

      {/*<Avatar
      size="m" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3548H96dTNpUBbwPng9eb9Pi_OYoJEHFJ1A&usqp=CAU" />
      <Avatar
      size="l" 
      src="https://nftevening.com/wp-content/uploads/2021/09/bored-ape-yacht-club-bayc-roadmap-2.0-version.png" />*/}

      <ul>
        {/*{result}*/}
        {/*{items.map(item =><li>{item}</li>)}*/}
        {/*{psult}*/}
        {/*{projects.map(project => <p>{project}</p>)}*/}
      </ul>
        {psult}
    </div>
  )
};

export default App;