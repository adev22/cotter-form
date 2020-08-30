import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      props.history.push("/");
    }
    const user = JSON.parse(localStorage.getItem("COTTER_USER"));
    setUserData(user);
  }, []);

  return (
    <div className="container">
      <div className="cardProfile">
        <div className="profileTitle">Profile</div>
        <img
          className="profilePicture"
          src="https://dummyimage.com/300x200/000/fff"
          alt="ProfilePicture"
        />
        <div className="profileContent">
          <div className="profileContentTitle">UserId</div>
          <div className="profileContentData">{userData.ID}</div>
        </div>
        <div className="profileContent">
          <div className="profileContentTitle">Email</div>
          <div className="profileContentData">{userData.identifier}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
