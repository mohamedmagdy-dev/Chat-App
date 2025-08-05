// // Router
// import { Link } from "react-router";
// // Mui Icons
// import MessageIcon from "@mui/icons-material/Message";
// import CallIcon from "@mui/icons-material/Call";
// import GroupIcon from "@mui/icons-material/Group";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Logo from "../assets/Icons/msg.png";
// export default function Aside() {
//   return (
//     <aside className=" p-2 bg-[#665eff] h-[60px] bottom-0 w-full min-lg:w-[60px] min-lg:h-screen flex min-lg:flex-col items-center justify-center absolute  min-lg:relative">
//       <img
//         src={Logo}
//         alt="Logo"
//         className="w-10 bg-white rounded absolute left-[10px] min-lg:top-[10px]"
//       />
//       <ul className="text-white flex min-lg:flex-col gap-10 max-[400px]:gap-6">
//         <li>
//           <Link to="/chat">
//             <MessageIcon />
//           </Link>
//         </li>
//         <li>
//           <Link to="/calls">
//             <CallIcon />
//           </Link>
//         </li>
//         <li>
//           <Link to="/friends">
//             <GroupIcon />
//           </Link>
//         </li>
//         <li>
//           <Link to="/profile">
//             <AccountCircleIcon />
//           </Link>
//         </li>
//       </ul>
//     </aside>
//   );
// }
// App.js

import { useEffect, useState } from "react";
import socket from "../socket/socket";

function App() {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receive_message", (data) => {
      setAllMessages((prev) => [...prev, data]);
    });

    // Cleanup when component unmounts
    return () => {
      socket.off("receive_message");
    };
  }, []);

  const handleSend = () => {
    if (message.trim() === "") return;

    const data = {
      message,
      sender: "User 1", // تقدر تغيرها حسب كل يوزر
    };

    // Show message locally
    setAllMessages((prev) => [...prev, data]);

    // Send to server
    socket.emit("send_message", data);

    setMessage("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Mego Chat</h1>

      <div className="mb-4 space-y-2">
        {allMessages.map((msg, index) => (
          <div key={index} className="p-2 rounded bg-gray-100 dark:bg-gray-800">
            <strong>{msg.sender}: </strong>
            {msg.message}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="border px-2 py-1 flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-1"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
