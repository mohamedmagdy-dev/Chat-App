import { useEffect, useState } from "react";
import DarkLightImg from "../../assets/Icons/day-and-night.png";
export default function DarkModToggle() {
  const [currentMode, setCurrentMode] = useState("light");

  useEffect(() => {
    document.getElementsByTagName("html")[0].className = currentMode;
  }, [currentMode]);
  function handelChangeMode() {
    setCurrentMode(currentMode == "light" ? "dark" : "light");
  }
  return (
    <button
      onClick={handelChangeMode}
      className="cursor-pointer select-none outline-none w-fit h-fit z-5 fixed right-10 top-10 before:w-2 before:h-2  before:z-3 before:absolute before:bg-green-400 before:left-[-4px] before:rounded-full"
    >
      <img
        src={DarkLightImg}
        alt="DarkLightImg"
        className={`w-10 transform duration-200 ${
          currentMode == "light" ? "rotate-0" : "rotate-180"
        } `}
      />
    </button>
  );
}
