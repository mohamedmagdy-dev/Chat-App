import PagePattern from "../assets/bgPatterns.svg";

export default function Form({ children }) {
  return (
    <div
      className={`min-h-[100vh] w-full  flex items-center justify-center bg-white dark:bg-dark`}
      style={{
        backgroundImage: `url(${PagePattern})`,
      }}
    >
      <form className="flex flex-col gap-5 max-md:w-[80%] md:w-[380px] ">
        {children}
      </form>
    </div>
  );
}
