import Input from "./Input";
import { useState } from "react";
export default function SideContainer({
  children,

  sectionTitle,
}) {
  const [search, setSearch] = useState("");

  return ( 
    <div className=" bg-white dark:bg-[#384045] w-full h-svh lg:w-[calc(50%-60px)] overflow-hidden shadow-sm border-r border-gray-200">
      <div className="p-3">
        <h1 className="text-dark-text text-3xl font-bold dark:text-white mb-3">
          {sectionTitle}
        </h1>
        <Input
          type="text"
          placeHolder="Search users"
          value={search}
          onChange={setSearch}
        />
      </div>

      <CardsContainer>{children}</CardsContainer>
    </div>
  );
}

export function CardsContainer({ children }) {
  return (
    <div className="mt-3 flex flex-col gap-3 bg-[#f7f9fa] h-[calc(100%-106px)] py-3   px-3  overflow-y-auto overflow-x-hidden dark:bg-[#2a2a2a]">
      {children}
    </div>
  );
}
