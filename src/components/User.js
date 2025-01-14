import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        bio: "This is a sample bio.",
        avatar_url: "",
        public_repos: 0,
        followers: 0,
        following: 0,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pankajshahx");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const {
      name,
      location,
      bio,
      avatar_url,
      public_repos,
      followers,
      following,
    } = this.state.userInfo;
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
        <div className="max-w-md w-full bg-white shadow-2xl rounded-lg p-6">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <img
              src={avatar_url}
              alt="Avatar"
              className="w-32 h-32 rounded-full shadow-lg"
            />
          </div>

          {/* User Details */}
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            {name}
          </h2>
          <h3 className="text-md text-center text-gray-600 mb-4">{location}</h3>
          <p className="text-sm text-center text-gray-500 mb-6">{bio}</p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800">
                {public_repos}
              </h4>
              <p className="text-gray-500">Repositories</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800">
                {followers}
              </h4>
              <p className="text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800">
                {following}
              </h4>
              <p className="text-gray-500">Following</p>
            </div>
          </div>

          {/* Additional Categories */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Categories
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Personal Projects</li>
              <li>Open Source Contributions</li>
              <li>Community Engagement</li>
              {/* You can dynamically add more categories here */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
