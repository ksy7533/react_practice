import React from "react";

const data = {
  test: {
    name: "test",
    description: "This is Test"
  },

  test02: {
    name: "test02",
    description: "This is Test02"
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>존재하지않는다</div>;
  }

  return (
    <div>
      <p>
        {username}({profile.name})
      </p>
      <p>profile.description</p>
    </div>
  );
};

export default Profile;
