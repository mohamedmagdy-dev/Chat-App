import Aside from "../components/Aside";
import Chats from "../components/Chats";
import ChatRoom from "../components/ChatRoom";
export default function Home() {
  return (
    <div className="flex">
      <Aside />
      <Chats />
      <ChatRoom />
    </div>
  );
}
