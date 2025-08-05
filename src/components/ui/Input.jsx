export default function Input({ type, placeHolder, value, onChange, name }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeHolder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${
        value.length >= 1 ? "text-dark" : "text-gray-400"
      }  outline-none p-2 text-md  border border-gray-300 rounded `}
    />
  );
}
