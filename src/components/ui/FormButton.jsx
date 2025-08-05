export default function FormButton({ title, onClick }) {
  return (
    <button
      className=" h-10 font-bold duration-200 hover:bg-darkBlue focus:bg-darkBlue bg-[#665dfe] text-white rounded text-center cursor-pointer"
      onClick={(e) => onClick(e)}
    >
      {title}
    </button>
  );
}
