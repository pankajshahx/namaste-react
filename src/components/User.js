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
      <div className="m-4 p-4">
        <div>Name : {name}</div>
        <div>Location : {location}</div>
      </div>
    );
  }
}

export default User;
