import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

export const Chat = () => {
  const chatProps = useMultiChatLogic(
    process.env.REACT_APP_PROJECTS,
    "testuser",
    "1234",
    ""
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} />
    </div>
  );
};
