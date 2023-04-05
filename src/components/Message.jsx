import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img
          src="https://images.pexels.com/photos/15879823/pexels-photo-15879823.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/15879823/pexels-photo-15879823.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
