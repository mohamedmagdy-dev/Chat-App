import Aside from "../components/Aside";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Aside />
    </div>
  );
}
