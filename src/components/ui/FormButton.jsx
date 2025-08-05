export default function FormButton({ title }) {
  return (
    <button className=" h-12 font-bold duration-200 hover:bg-darkBlue focus:bg-darkBlue bg-[#665dfe] text-white rounded text-center cursor-pointer">
      {title}
    </button>
  );
}
