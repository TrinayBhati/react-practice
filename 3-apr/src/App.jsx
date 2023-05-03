import "./App.css";

// const Avatar = ({src, width, height}) =>{
const Avatar = ({src, size}) =>{  
  let height, width;
  if(size == "s"){
    width:50;
    height:50;
  }
  else if (size == "m"){
    width:100;
    height:100;
  }
  return (
    <div >
      <img src={src} className="avatar" 
      width={width}
      height={height}/>
    </div>
    )
};
  
const App = ()=>{
  return (
    <div>
      <h2>Hello</h2>

      {/*<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3548H96dTNpUBbwPng9eb9Pi_OYoJEHFJ1A&usqp=CAU" height={200} width={200}/>
      <Avatar src="https://nftevening.com/wp-content/uploads/2021/09/bored-ape-yacht-club-bayc-roadmap-2.0-version.png" height={100} width={100}/>*/}

      <Avatar
      size="m" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3548H96dTNpUBbwPng9eb9Pi_OYoJEHFJ1A&usqp=CAU" />
      <Avatar
      size="l" 
      src="https://nftevening.com/wp-content/uploads/2021/09/bored-ape-yacht-club-bayc-roadmap-2.0-version.png" />
    </div>
  )
};

export default App;