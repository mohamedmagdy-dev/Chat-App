import { useSelector } from "react-redux";
export default function Msg({ msgTime, msgContent, sender }) {
  const { user } = useSelector((state) => state.Auth);
    const { selectedFriend } = useSelector((state) => state.chatFriend);
  return (
    <div
      className={`p-2 rounded-md text-sm max-w-full break-words w-fit dark:text-white relative ${
        user.email === sender
          ? " text-white bg-[#665eff] self-end"
          : "text-[#9d93b5] bg-[#f5f6fa] dark:bg-[#384045]"
      } `}
    >
      <div
        className={` bg-white dark:bg-[#323333] p-2 rounded-full w-10 h-10 absolute  bottom-[-20px] ${
          user.email === sender ? "right-[-20px]" : "left-[-20px]"
        }`}
      >
        <img
          src={user.email === sender ? user.avatar : selectedFriend.avatar}
          alt="useAvatar"
          className="rounded-full w-full h-full"
        />
      </div>
      <p>{msgContent}</p>
      <span>{msgTime}</span>
    </div>
  );
}
