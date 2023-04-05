import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Search users.." />
      </div>
      <div className="user-chat">
        <img
          src={
            "https://images.pexels.com/photos/15879823/pexels-photo-15879823.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt=""
        />
        <div className="user-chat-info">
          <span>James</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
