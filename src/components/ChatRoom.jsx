import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import socket from "../socket/socket";

import ShortcutIcon from "@mui/icons-material/Shortcut";
import Msg from "./ui/Msg";
export default function ChatRoom() {
  const [allMessages, setAllMessages] = useState([]);
  const { user } = useSelector((state) => state.Auth);
  const { selectedFriend } = useSelector((state) => state.chatFriend);

  useEffect(() => {
    if (user) {
      socket.connect();
      console.log("connected");
      socket.emit("join", user);
      // Receive Messages
      socket.on("receiveMessage", (message) => {
        setAllMessages((prev) => [...prev, message]);
      });
    }
    return () => {
      socket.off("receiveMessage");
      socket.disconnect();
    };
  }, [user]);

  return (
    <>
      {selectedFriend ? (
        <ChatBox allMessages={allMessages} setAllMessages={setAllMessages} />
      ) : (
        <FirstLoad user={user} />
      )}
    </>
  );
}

export function ChatBox({ allMessages, setAllMessages }) {
  console.log(allMessages);
  return (
    <div className="relative w-full max-h-svh overflow-x-auto  dark:bg-[#323333]">
      <TopChatRoom />
      <div className="flex flex-col gap-6 py-4 px-8 h-[calc(100%-150px)] overflow-hidden">
        {allMessages.map((msg, i) => {
          return (
            <Msg
              key={i}
              msgTime={msg.createdAt}
              msgContent={msg.content}
              sender={msg.sender}
            />
          );
        })}
      </div>
      <ChatRoomControls setAllMessages={setAllMessages} />
    </div>
  );
}

export function TopChatRoom() {
  const { selectedFriend } = useSelector((state) => state.chatFriend);

  return (
    <div className="info flex gap-3 items-center bg-white dark:bg-[#323333] dark:border-[#2a2a2e] p-4 border-b border-gray-300 shadow-sm w-full h-fit sticky z-3  top-0">
      <img
        src={selectedFriend.avatar}
        alt="Friend Img"
        className="rounded-full w-12 h-12"
      />
      <div className="">
        <h3 className="text-lg dark:text-white">{selectedFriend.username}</h3>
        <span className="text-gray-400 text-sm">Online</span>
      </div>
    </div>
  );
}

export function ChatRoomControls({ setAllMessages }) {
  const [msg, setMsg] = useState("");
  const { user } = useSelector((state) => state.Auth);
  const { selectedFriend } = useSelector((state) => state.chatFriend);

  function sendMessage() {
    if (msg.trim()) {
      const messageData = {
        sender: user.email,
        receiver: selectedFriend.email,
        content: msg,
        createdAt: `${new Date()}`,
      };
      socket.emit("sendMessage", messageData);

      setAllMessages((prev) => [...prev, messageData]);
      setMsg("");
    }
  }
  return (
    <div className="flex justify-between items-center bg-white z-2 dark:bg-[#323333] dark:border-[#2a2a2e] p-3 border-t border-gray-300 shadow-sm w-full h-fit sticky bottom-[60px] min-lg:bottom-0">
      <input
        type="text"
        placeholder="Type your message here..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => e.key == "Enter" && sendMessage()}
        className={`${
          msg.length >= 1 ? "text-dark" : "text-gray-400"
        }  outline-none pl-4  text-sm  dark:bg-[#323333] dark:border-none rounded
      dark:text-white w-full `}
      />
      <button
        onClick={sendMessage}
        className="w-10 h-10 rounded-full cursor-pointer bg-[#665eff] text-white"
      >
        <ShortcutIcon fontSize="small" />
      </button>
    </div>
  );
}

export function FirstLoad({ user }) {
  return (
    <div className="dark:bg-[#323333] lg:w-[60%] flex flex-col items-center justify-center">
      <img src={user.avatar} alt="userImg" className="rounded-full w-20" />
      <h3 className="my-3 text-4xl text-dark-text dark:text-white">
        {user.username}
      </h3>
      <p className="text-sm text-gray-400">
        Please select a chat to Start messaging.
      </p>
    </div>
  );
}
