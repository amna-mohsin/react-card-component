import React from "react";
import "./Card.css";

function Card({ profilePicUrl, name, description }) {
  function handleFollowClick() {
    alert("Your are now Following " + name);
  }

  return (
    <div className="card">
      <img src={profilePicUrl} alt={name} className="profile-picture" />

      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>

      <button className="follow-button" onClick={handleFollowClick}>
        Follow
      </button>
    </div>
  );
}

export default Card;
