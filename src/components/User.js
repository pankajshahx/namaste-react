import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dummy",
      location: "dummy location",
    };
  }

  render() {
    const { name, location } = this.state;
    return (
      <>
        <div>Name : {name}</div>
        <div>Location : {location}</div>
      </>
    );
  }
}

export default User;
