// src/socket.js
import { io } from "socket.io-client";

const socket = io("https://chat-app-backend-by-ai-production.up.railway.app/", {
  transports: ["websocket"],
  withCredentials: true,
  autoConnect: false,
});

export default socket;
