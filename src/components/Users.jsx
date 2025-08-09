import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../features/friends/friends";
import { selectFriendToChat } from "../features/chat friend/chatFriend";
import { openChatBox } from "../features/chat box/chatBox";
import { CardsContainer } from "./ui/SideContainer";
export default function Users() {
  const { user } = useSelector((state) => state.Auth);
  const [activeChat, setActiveChat] = useState(null);
  const { friends, isLoading } = useSelector((state) => state.friends);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends(user.email));
  }, [dispatch, user.email]);

  return (
    <CardsContainer>
      {isLoading ? (
        <p className="text-center text-gray-400">Loading friends...</p>
      ) : friends.length === 0 ? (
        <p className="text-center text-gray-400">No friends found.</p>
      ) : (
        friends.map((friend) => {
          if (friend.id !== user.id) {
            return (
              <User
                key={friend.id}
                userImg={friend.avatar}
                msgTime="just now"
                userName={friend.username}
                lastMsg="You can start a chat"
                isActive={friend.id === activeChat}
                onClick={() => {
                  dispatch(selectFriendToChat(friend));
                  dispatch(openChatBox());
                  setActiveChat(friend.id);
                }}
              />
            );
          }
        })
      )}
    </CardsContainer>
  );
}

export function User({
  userImg,
  msgTime,
  userName,
  lastMsg,
  onClick,
  isActive,
}) {
  return (
    <div
      onClick={onClick}
      className={`p-3 cursor-pointer rounded  dark:border-[#323240] border border-gray-300 flex items-center gap-3 duration-200 hover:border-blue-900 focus:border-blue-900 ${
        isActive ? "bg-[#665eff] text-white" : "bg-transparent"
      }`}
    >
      <img src={userImg} alt="UserImg" className="rounded-full w-12 h-12" />
      <div className="info w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg dark:text-white">{userName}</h3>
          <span
            className={`${isActive ? "text-white" : "text-gray-400"} text-sm`}
          >
            {msgTime}
          </span>
        </div>
        <p
          className={` text-sm truncate max-w-[200px] ${
            isActive ? "text-white" : "text-gray-400"
          }`}
        >
          {lastMsg}
        </p>
      </div>
    </div>
  );
}
