import { Link } from "react-router";

export default function PageLink({ route, pageName }) {
  return (
    <Link to={route} className=" duration-200 hover:text-darkBlue focus:text-darkBlue text-[#665eff] font-semibold text-sm">
      {" "}
      {pageName}
    </Link>
  );
}
