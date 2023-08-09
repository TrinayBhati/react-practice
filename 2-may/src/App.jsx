import "./App.css";


// const OnePlusCard = () =>{
//   return (
//       <div className="card">
//         <h2 className="title">One Plus</h2>
//         <h3>Beam Blue, In the wild West</h3>
//       </div>
//     )
// };
// const BoatCard = () =>{
//   return (
//       <div className="card">
//         <h2 className="title">One Plus</h2>
//         <h3>Beam Blue, In the wild West</h3>
//       </div>
//     )
// };

const ProductCard = (props) =>{
  return (
      <div className="card">
        <h2 className="title">{props.productName}</h2>
        <h3>{props.description} </h3>
      </div>
    )
};

const Acordion = ({title, label} ) =>{
  // const {title, label} = props; destructuring here or above inside the call 
  return(
    <div>
      <h3>{title}</h3>
      <form>
        <div>
          <input type="checkbox"></input>
          <label> {label}</label> 
        </div>
      </form>
    </div>
    )
};

const UserProfile = (props) =>{
  // const {userName, age, isMarried, hobbies, userLocation} = props;
  const {user} = props;
  return (
    <div>

      {/*<p>IS MARRIED : {isMarried ? "Yes" : "No"}</p>*/}
      {/*<p>NAME : {userName}</p>
      <p>AGE: {age}</p>
      {isMarried && <p>IS MARRIED : Yes</p>}
      <p>HOBBIES: {hobbies[1 ]}</p>
      <p>Country: {userLocation.country}</p>
      <p>City: {userLocation.city}</p>
*/}

      <p>NAME : {user.userName}</p>
      <p>AGE: {user.age}</p>
      {user.isMarried && <p>IS MARRIED : Yes</p>}
      <p>HOBBIES: {user.hobbies[1 ]}</p>
      <p>Country: {user.userLocation.country}</p>
      <p>City: {user.userLocation.city}</p>
    </div>
    )
};

const UserChatCard = ({user, isOnline})=>{
  if(!isOnline){
    return(
      <div>
      <p>{user} is Not Online</p>
      <span className="red-dot"/>
      </div>
      )
  }
  return (
    <div className="container1">
      <h2 className="name">{user}</h2>
      {isOnline && <span className="green-dot"/>}
    </div>
    )
};

const App = ()=>{
  return (

    <div>

     {/*<div className="container"> 
     <ProductCard productName="boAT Rockers" description="In the wild West" />
      <ProductCard productName="One Plus" description="In the Ear" />*/}

    {/*<Acordion title="DISCOUNT" label="50% or more" />
    <Acordion title="MICROPHONE" label="Yes" />*/}

    {/*<UserProfile
      // userName="Trinay" 
      // age={20} 
      // isMarried={true} 
      // hobbies={["Gaming", "Reading"]}
      // userLocation={{city:"Delhi", country:"India"}}

      user = {{
       userName:"Trinay",
       age:20,
       isMarried:true,
       hobbies:["Gaming", "Reading"],
       userLocation:{city:"Delhi", country:"India"}, 
      }}
       />*/}
    <UserChatCard user="Trinay" isOnline={true}/>
    <UserChatCard user="Shourya" isOnline={false}/>
    <UserChatCard user="Aditya" isOnline={true}/>
    </div> 
  )
};

export default App;