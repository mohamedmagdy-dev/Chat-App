import { useState } from "react";
import Input from "./ui/Input";
import Users from "./Users";
export default function Chats() {
  const [search, setSearch] = useState("");

  return (
    <div className=" bg-white dark:bg-[#384045] w-full h-svh lg:w-[calc(40%-60px)] overflow-hidden shadow-sm">
      <div className="p-3">
        <h1 className="text-dark-text text-3xl font-bold dark:text-white mb-3">
          Chats
        </h1>
        <Input
          type="text"
          placeHolder="Search users"
          value={search}
          onChange={setSearch}
        />
      </div>
      <Users />
    </div>
  );
}
