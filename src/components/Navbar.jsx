import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chataroo</span>
      <div className="user">
        <img
          src={
            "https://images.pexels.com/photos/15879823/pexels-photo-15879823.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
