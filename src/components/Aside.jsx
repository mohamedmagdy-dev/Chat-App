// Router
import { Link } from "react-router";
// Mui Icons
import MessageIcon from "@mui/icons-material/Message";
import CallIcon from "@mui/icons-material/Call";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../assets/Icons/msg.png";
export default function Aside() {
  return (
    <aside className=" z-3 p-5 bg-[#665eff] h-[60px] bottom-0 w-full min-lg:w-[60px] min-lg:h-screen flex min-lg:flex-col items-center justify-center absolute  min-lg:relative">
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
          <Link to="/calls">
            <CallIcon />
          </Link>
        </li>
        <li>
          <Link to="/friends">
            <GroupIcon />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <AccountCircleIcon />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

