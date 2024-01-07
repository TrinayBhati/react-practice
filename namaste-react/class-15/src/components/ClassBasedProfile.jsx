import React from "react";

class ClassBasedProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      anotherCount: 200,
      userInfo: {
        name: "",
        location: "",
      },
    };
  }
  async componentDidMount() {
    // console.log("after render, call API here");

    const data = await fetch("https://api.github.com/users/trinaybhati");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("log check whaat...");
    }, 1000);
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.state.count != prevState.count) {
      // console.log("checking if shit happens");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // const {count} = this.state; destructuring
    // console.log(this.state.userInfo);
    const { name, bio, avatar_url } = this.state.userInfo;

    return (
      <div>
        <h1>Class based component</h1>
        <img src={avatar_url} height="100px" alt="pfp" />
        <h1> github name : {name}</h1>
        <h1> github bio : {bio}</h1>
        <h2> props : {this.props.name}</h2>
        <h2> props : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 11,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default ClassBasedProfile;
