// Router
import { Link } from "react-router";
// Mui Icons
import MessageIcon from "@mui/icons-material/Message";
import CallIcon from "@mui/icons-material/Call";
import GroupIcon from "@mui/icons-material/Group";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../assets/Icons/msg.png";
// Slicer
import { closeChatBox } from "../features/chat box/chatBox";
import { useDispatch, useSelector } from "react-redux";
export default function Aside() {
  const { isOpened } = useSelector((state) => state.chatBox);
  const dispatch = useDispatch();
  return (
    <aside className=" z-6 p-5 bg-[#665eff] h-[60px] bottom-0 w-full min-lg:w-[60px] min-lg:h-screen flex min-lg:flex-col items-center justify-center absolute  min-lg:relative">
      <img
        src={Logo}
        alt="Logo"
        className="w-10 bg-white rounded absolute left-[10px] min-lg:top-[10px]"
      />
      <ul className="text-white flex min-lg:flex-col gap-10 max-[400px]:gap-6">
        <li>
          <Link to="/home">
            <MessageIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <CallIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <GroupIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <AccountCircleIcon />
          </Link>
        </li>
        {!!isOpened && (
          <li className="hidden max-lg:block">
            <button
              className=" cursor-pointer"
              onClick={() => dispatch(closeChatBox())}
            >
              <CloseFullscreenIcon fontSize="small" />
            </button>
          </li>
        )}
      </ul>
    </aside>
  );
}
