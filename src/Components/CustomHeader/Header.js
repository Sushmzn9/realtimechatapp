import React from "react";
import { AiFillWechat } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Header = ({ chat }) => {
  console.log(chat);
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <AiFillWechat className="icon-chat" />
        {chat.title === "Spinner" ? (
          <h3 className="header-text">{chat.title}</h3>
        ) : (
          <h3 className="header-text">Create a chat!</h3>
        )}
      </div>
      <div className="flexbetween">
        <BsFillTelephoneFill className="icon-phone" />
        {chat.description !== "Loading..." ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">Call</p>
        )}
      </div>
    </div>
  );
};
